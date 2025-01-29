type Profile = {
  title: string;
  content: string | string[];
}[];

type Skill = {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
};

export const profile: Profile = [
  {
    title: "名前",
    content: "K.M",
  },
  {
    title: "経歴",
    content: `
      2017年に大学院を卒業後、上場企業のメーカーで組み込みソフトのシステムエンジニアとして勤務していました。
      2020年に転職し、現在はIT企業でWebアプリの開発を主に担当しています。フロントエンド・バックエンドの両方の開発を行っております。`,
  },
  {
    title: "趣味・興味",
    content: [
      "新しい技術の学習 💻",
      "読書(ビジネス書、技術書) 📕",
      "バドミントン 🏸",
      "キャンプ 🏕️",
    ],
  },
];

export const skills: Skill[] = [
  {
    title: "プログラミング言語",
    skills: [
      { name: "PHP", level: 3 },
      { name: "Python", level: 3 },
      { name: "HTML/CSS", level: 2 },
      { name: "JavaScript/TypeScript", level: 4 },
    ],
  },
  {
    title: "フレームワーク",
    skills: [
      { name: "CakePHP", level: 4 },
      { name: "Laravel", level: 3 },
      { name: "React", level: 4 },
      { name: "Next.js", level: 2 },
      { name: "Vue.js", level: 2 },
      { name: "Nuxt.js", level: 2 },
      { name: "Express", level: 1 },
      { name: "Node.js", level: 3 },
    ],
  },
  {
    title: "インフラ・ツール",
    skills: [
      { name: "Git", level: 3 },
      { name: "GitHub", level: 3 },
      { name: "AWS", level: 3 },
      { name: "Docker", level: 3 },
    ],
  },
  {
    title: "データベース",
    skills: [
      { name: "PostgreSQL", level: 3 },
      { name: "MySQL", level: 3 },
      { name: "MariaDB", level: 3 },
      { name: "SQLServer", level: 3 },
    ],
  },
];
