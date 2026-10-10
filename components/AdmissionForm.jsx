"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/siteConfig";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

const emptyForm = { parentName: "", phone: "", childName: "", program: "", message: "" };

// Returns an object of field → error message (empty when valid)
function validate(values) {
  const errors = {};
  if (values.parentName.trim().length < 2) errors.parentName = "Please enter your name.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) errors.phone = "Please enter a valid phone number.";
  if (values.childName.trim().length < 2) errors.childName = "Please enter your child's name.";
  if (!values.program) errors.program = "Please choose a program.";
  return errors;
}

/** Enquiry form that opens WhatsApp with a prefilled message. */
export default function AdmissionForm() {
  const { admissions, programs } = siteConfig;
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  // Auto-hide the success toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 4500);
    return () => clearTimeout(t);
  }, [toast]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    // Build a WhatsApp message from the form and open it in a new tab
    const lines = [
      `Assalamu Alaikum! Admission enquiry for ${siteConfig.name}:`,
      "",
      `Parent Name: ${values.parentName.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Child's Name: ${values.childName.trim()}`,
      `Program: ${values.program}`,
    ];
    if (values.message.trim()) lines.push(`Message: ${values.message.trim()}`);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setToast(true);
    setValues(emptyForm);
  };

  const field = (name) => `input ${errors[name] ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`;

  return (
    <section className="section bg-brand-mist">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* Left: pitch */}
        <Reveal className="lg:pt-4">
          <span className="eyebrow">Admissions {siteConfig.session}</span>
          <h2 className="heading">{admissions.title}</h2>
          <span className="heading-bar" />
          <p className="mt-5 text-lg text-gray-600">{admissions.subtitle}</p>

          <ul className="mt-8 space-y-4">
            {admissions.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-lg font-medium text-brand-navy">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gold">
                  <CheckCircle2 size={20} className="text-brand-navy" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#1ebe5b]"
          >
            <MessageCircle size={20} aria-hidden="true" /> Chat on WhatsApp
          </a>
        </Reveal>

        {/* Right: enquiry form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border-t-4 border-brand-gold bg-white p-6 shadow-lift sm:p-8"
            aria-label="Admission enquiry form"
          >
            <h3 className="text-2xl font-bold text-brand-navy">Online Admission Enquiry</h3>
            <p className="mt-1 text-sm text-gray-500">We&apos;ll get back to you on WhatsApp.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Parent Name" error={errors.parentName} id="parentName">
                <input id="parentName" name="parentName" value={values.parentName} onChange={onChange}
                  className={field("parentName")} placeholder="e.g. Ahmed Khan" autoComplete="name" />
              </Field>
              <Field label="Phone Number" error={errors.phone} id="phone">
                <input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange}
                  className={field("phone")} placeholder="03XX XXXXXXX" autoComplete="tel" inputMode="tel" />
              </Field>
              <Field label="Child's Name" error={errors.childName} id="childName">
                <input id="childName" name="childName" value={values.childName} onChange={onChange}
                  className={field("childName")} placeholder="e.g. Fatima" />
              </Field>
              <Field label="Program" error={errors.program} id="program">
                <select id="program" name="program" value={values.program} onChange={onChange}
                  className={`${field("program")} ${values.program ? "" : "text-gray-400"}`}>
                  <option value="" disabled>Select a program</option>
                  {programs.map((p) => (
                    <option key={p.slug} value={p.title} className="text-brand-ink">
                      {p.title} ({p.range})
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Message (optional)" id="message" className="sm:col-span-2">
                <textarea id="message" name="message" rows={4} value={values.message} onChange={onChange}
                  className={`${field("message")} resize-none`} placeholder="Any questions for us?" />
              </Field>
            </div>

            <button type="submit" className="btn-navy mt-6 w-full !py-3.5">
              <Send size={16} aria-hidden="true" /> Send Enquiry via WhatsApp
            </button>
          </form>
        </Reveal>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed inset-x-4 bottom-6 z-[70] mx-auto flex max-w-sm items-center gap-3 rounded-2xl border-l-4 border-brand-gold bg-white p-4 text-brand-ink shadow-2xl"
          >
            <CheckCircle2 size={28} className="shrink-0 text-brand-navy" aria-hidden="true" />
            <div>
              <p className="font-bold text-brand-navy">JazakAllah Khair!</p>
              <p className="text-sm text-gray-500">Your enquiry is ready in WhatsApp — just press send.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/** Label + input wrapper with an inline error message */
function Field({ label, id, error, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-gray-700">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
