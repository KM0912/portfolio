type Profile = {
  title: string;
  content: string | string[];
}[];

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
