export interface MenuItem {
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { label: "自己紹介", href: "#about" },
  { label: "スキル", href: "#skills" },
  { label: "実績", href: "#projects" },
  { label: "資格", href: "#certifications" },
  { label: "お問い合わせ", href: "#contact" },
];
