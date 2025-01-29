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

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  role: string;
  achievements: string[];
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

export const projects: Project[] = [
  {
    title: "ECサイトリニューアル",
    description: "大手小売企業のECサイトをモダン化。売上30%増加を達成。",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "TypeScript", "Node.js", "AWS"],
    role: "技術リード・フルスタック開発",
    achievements: [
      "マイクロサービスアーキテクチャの設計と実装",
      "CI/CDパイプラインの構築",
      "パフォーマンス最適化による読み込み時間50%削減",
    ],
  },
  {
    title: "社内業務システム刷新",
    description:
      "従来の基幹システムをクラウドネイティブなアプリケーションへ移行",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["Spring Boot", "Vue.js", "PostgreSQL", "Docker"],
    role: "バックエンドリード",
    achievements: [
      "レガシーシステムのモダン化",
      "セキュリティ強化",
      "運用コスト40%削減",
    ],
  },
  {
    title: "AIチャットボット開発",
    description: "カスタマーサポート業務の自動化システムを開発",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "FastAPI", "React", "GCP"],
    role: "プロジェクトマネージャー・AI開発",
    achievements: [
      "問い合わせ対応時間70%削減",
      "カスタマー満足度20%向上",
      "24時間対応の実現",
    ],
  },
];
