export type MenuItem = {
  label: string;
  href: string;
};

export const menuItems: {
  [key: string]: MenuItem;
} = {
  about: { label: "About", href: "#about" },
  skills: { label: "Skills", href: "#skills" },
  projects: { label: "Projects", href: "#projects" },
  certifications: { label: "Certifications", href: "#certifications" },
  contact: { label: "Contact", href: "#contact" },
};
