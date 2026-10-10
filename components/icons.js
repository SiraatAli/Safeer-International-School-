import {
  Baby,
  Blocks,
  BookOpen,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Lightbulb,
  Mic,
  Moon,
  PiggyBank,
  Sparkles,
  Sprout,
  Wrench,
} from "lucide-react";

// Icon names used in lib/siteConfig.js → lucide-react components
const icons = {
  Baby,
  Blocks,
  BookOpen,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Lightbulb,
  Mic,
  Moon,
  PiggyBank,
  Sprout,
  Wrench,
};

export function getIcon(name) {
  return icons[name] ?? Sparkles;
}
