/**
 * ============================================================
 *  SAFEER INTERNATIONAL SCHOOL — SITE CONTENT
 *  Edit this one file to update text, contacts, programs and
 *  images across the whole website. No other code changes needed.
 * ============================================================
 */

// Unsplash helper: returns a sized Unsplash URL from a photo id.
// When real photos are ready, put them in /public/images and use "/images/your-photo.jpg" instead.
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const siteConfig = {
  name: "Safeer International School",
  shortName: "Safeer",
  tagline: "Where No Dream Is Orphaned",
  description:
    "Safeer International School — a new Cambridge-aligned school nurturing faith, knowledge and character from Early Years and Montessori to Grade 7. Admissions opening soon.",
  url: "https://safeer-school.vercel.app", // update after deploying / buying a domain
  session: "2027 Session",

  // ---------- Contact (placeholders until confirmed) ----------
  phone: "+92 3XX XXXXXXX",
  phoneHref: "tel:+923000000000",
  whatsappNumber: "923000000000", // international format, digits only — no "+" or spaces
  email: "info@safeerschool.edu.pk",
  address: "Address to be confirmed",
  // Paste the Google Maps "Embed a map" src URL here once the location is confirmed.
  mapEmbedUrl: "",
  hours: "Mon – Fri, 8:00 AM – 2:00 PM",

  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  },

  // Each item is a separate page in /app
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Why Safeer", href: "/why-safeer" },
    { label: "Gallery", href: "/gallery" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact", href: "/contact" },
  ],

  // ---------- Home hero ----------
  hero: {
    badge: "Admissions Opening Soon",
    title: "Inspiring Future Leaders",
    subtitle:
      "Nurturing faith, knowledge and character — a Cambridge-aligned education rooted in Islamic values.",
    image: unsplash("1588072432836-e10032774350", 1800),
    imageAlt: "Young students writing and learning together at their desks",
    announcement: "Safeer International School – Opening Soon. Limited seats available.",
  },

  // Banner image used behind inner-page titles
  pageHeaderImage: unsplash("1580582932707-520aed937b7b", 1800),

  // ---------- About ----------
  about: {
    title: "A school built around your child",
    text: "Safeer brings together the Cambridge Early Years framework, the Montessori method and a structured Islamic Studies programme — so every child grows in confidence, knowledge and good character.",
    image: unsplash("1544776193-352d25ca82cd", 1000),
    imageAlt: "Two young girls reading and writing together in class",
    highlights: ["Islamic Values", "Modern Learning", "Caring Environment"],
    mission: "To raise confident, curious and kind Muslims who excel in modern knowledge while holding firmly to their faith.",
    vision: "A school where every child's potential is discovered and no dream is left behind.",
    values: ["Sidq (Truth)", "Amanah (Trust)", "Sabr (Patience)", "Respect", "Kindness", "Excellence"],
    frameworks: [
      {
        title: "Cambridge Early Years",
        text: "An internationally recognised framework for literacy, numeracy and understanding the world.",
        icon: "Globe2",
      },
      {
        title: "Montessori Method",
        text: "Child-led learning with hands-on Practical Life and Sensorial materials.",
        icon: "Blocks",
      },
      {
        title: "Islamic Studies & Character",
        text: "Quran, Tajweed, Seerah, Duas and Akhlaq built into every school day.",
        icon: "Moon",
      },
    ],
  },

  stats: [
    { value: "3–13", label: "Years of age" },
    { value: "10", label: "Classes, Pre-Nursery to Grade 7" },
    { value: "40", label: "Periods every week" },
    { value: "4", label: "Life-skill tracks" },
  ],

  // ---------- Programs ----------
  // icon: a lucide-react icon name mapped in components/icons.js
  programs: [
    {
      slug: "early-years",
      title: "Early Years",
      range: "Ages 3 – 6",
      classes: "Pre-Nursery (EY1) · Nursery (EY2) · KG (EY3)",
      description: "Play-based phonics, early numeracy and daily Islamic manners on the Cambridge EY framework.",
      icon: "Baby",
      image: unsplash("1503454537195-1dcabb73ffb9", 900),
      imageAlt: "Smiling young child with paint on her face",
      highlights: [
        "Systematic English phonics and Urdu letter sounds",
        "Counting, shapes and early problem solving",
        "Understanding the World: science through play",
        "Duas, short Surahs and good manners",
        "No exams — weekly observation & learning portfolio",
      ],
    },
    {
      slug: "montessori",
      title: "Montessori",
      range: "Ages 3 – 6",
      classes: "Prepared environment with trained directresses",
      description: "A 3-hour work cycle with hands-on Practical Life, Sensorial, Maths and Language materials.",
      icon: "Blocks",
      image: unsplash("1484820540004-14229fe36ca4", 900),
      imageAlt: "Colourful wooden learning blocks",
      highlights: [
        "3-hour uninterrupted work cycle every morning",
        "Practical Life: pouring, dressing frames, care of environment",
        "Sensorial: Pink Tower, colour tablets, sound boxes",
        "Golden beads, sandpaper letters & movable alphabet",
        "Islamic Montessori: Wudu tray, Salah mat, Dua tracing",
      ],
    },
    {
      slug: "primary",
      title: "Primary",
      range: "Grades 1 – 5",
      classes: "Reading → Understanding → Applying",
      description: "Strong English, Urdu and Maths with daily Quran, STEAM projects and public speaking.",
      icon: "BookOpen",
      image: unsplash("1529390079861-591de354faf5", 900),
      imageAlt: "Primary students concentrating on their writing",
      highlights: [
        "English, Urdu, Maths, Science and Social Studies",
        "Quran Nazra with Tajweed and short Surah translation",
        "Computer, STEAM and hands-on projects",
        "Public speaking, creative writing and life skills",
        "Financial literacy from Grade 5",
      ],
    },
    {
      slug: "middle-school",
      title: "Middle School",
      range: "Grades 6 – 7",
      classes: "Subject specialisation & leadership",
      description: "Separate sciences, coding, debate and leadership — guided by Tafseer and Seerah.",
      icon: "GraduationCap",
      image: unsplash("1509062522246-3755977927d7", 900),
      imageAlt: "Middle school class listening to their teacher",
      highlights: [
        "Separate Biology, Chemistry and Physics with lab work",
        "Algebra, geometry and statistics",
        "Computational thinking and coding",
        "Debate, leadership and entrepreneurship projects",
        "Tafseer, Hadith, Fiqh and Seerah",
      ],
    },
  ],

  // ---------- Why choose Safeer ----------
  whyChoose: [
    {
      title: "Modern Learning",
      text: "Cambridge-aligned teaching, STEAM projects and coding from an early age.",
      icon: "Lightbulb",
    },
    {
      title: "Islamic Values",
      text: "Daily Quran with Tajweed, Seerah and Akhlaq woven into every school day.",
      icon: "Moon",
    },
    {
      title: "Practical Skills",
      text: "Public speaking, life skills, digital and financial literacy for every child.",
      icon: "Wrench",
    },
    {
      title: "Student Development",
      text: "Continuous, low-stress assessment that nurtures the whole child.",
      icon: "Sprout",
    },
  ],

  // The compulsory "Safeer Skills Programme"
  skills: [
    { title: "Communication & Public Speaking", text: "Confident speaking, presentations, debate and active listening.", icon: "Mic" },
    { title: "Life Skills & Hygiene", text: "Personal hygiene, time management, teamwork and problem solving.", icon: "HeartHandshake" },
    { title: "Digital & Tech Literacy", text: "Typing, documents, presentations, online safety and coding.", icon: "Laptop" },
    { title: "Financial Literacy", text: "Saving habits, needs vs. wants, budgeting and mini business projects.", icon: "PiggyBank" },
  ],

  // Balanced assessment (Grades 1–7)
  assessment: [
    { value: 50, label: "Academic tests & exams" },
    { value: 20, label: "Projects & STEAM" },
    { value: 15, label: "Classwork & participation" },
    { value: 15, label: "Skills & Islamic character" },
  ],

  // ---------- Gallery (replace with real campus photos when available) ----------
  gallery: [
    { src: unsplash("1580582932707-520aed937b7b"), alt: "Bright, spacious classroom", caption: "Bright Classrooms" },
    { src: unsplash("1577896851231-70ef18881754"), alt: "Students raising hands during an interactive lesson", caption: "Interactive Lessons" },
    { src: unsplash("1516627145497-ae6968895b74"), alt: "Toddler exploring a toy in the early years room", caption: "Early Years Play" },
    { src: unsplash("1587654780291-39c9404d746b"), alt: "Colourful building bricks for STEAM activities", caption: "STEAM & Creativity" },
    { src: unsplash("1610484826967-09c5720778c7"), alt: "Student using a laptop for digital learning", caption: "Digital Learning" },
    { src: unsplash("1427504494785-3a9ca7044f45"), alt: "Library shelves full of books", caption: "Library" },
    { src: unsplash("1560785496-3c9d27877182"), alt: "Young boy focused on his writing", caption: "Focused Learning" },
    { src: unsplash("1562774053-701939374585"), alt: "School campus building with green lawn", caption: "Our Campus" },
  ],

  // ---------- Admissions ----------
  admissions: {
    title: "Join Safeer International School",
    subtitle: "Register your interest today and be the first to hear when admissions open.",
    points: [
      "Limited seats in every class",
      "Early registration priority",
      "Free campus visit & meeting",
    ],
    steps: [
      { title: "Send an Enquiry", text: "Fill in the form or message us on WhatsApp." },
      { title: "Campus Visit", text: "Meet our team and see the classrooms." },
      { title: "Child Assessment", text: "A friendly, age-appropriate readiness check." },
      { title: "Confirm Seat", text: "Complete registration and welcome to Safeer!" },
    ],
  },
};

export default siteConfig;
