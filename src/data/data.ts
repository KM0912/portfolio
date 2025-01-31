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
};

type Certification = {
  name: string;
  issuer: string;
  date: string;
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
    title: "電子カルテシステム開発",
    description: `
      医療機関向けの電子カルテシステムの開発。
      既存のシステムのバージョンアップを行い、新機能の追加や不具合の修正を行いました。

      診察結果を管理するだけでなく、薬剤の処方や患者への処置の指示や実施記録など、医療機関で必要とされる様々な機能を提供しています。

      規模の大きなプロジェクトであり、テーブル数は400弱、ソースコードの量やファイル数も膨大でした。新機能を追加するにあたり、既存のコードを理解し、修正を行うことが求められました。既存の仕様を把握することが難しいプロジェクトでしたが、チームメンバーとのコミュニケーションを密に取ったり、ソースコードを読み込むことで、無事に開発を進めることができました。      
    `,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: [
      "React",
      "TypeScript",
      "Nuxt.js",
      "Laravel",
      "mariaDB",
      "Docker",
      "AWS",
    ],
    role: "フロントエンド・バックエンド開発",
  },
  {
    title: "BIツール開発",
    description: `
      データの可視化や分析を行うBI(ビジネスインテリジェンス)ツールの開発。

      大きく分けて、3つのページを開発しました。
      1. ユーザーページ
      2. 定義ページ
      3. 管理者ページ

      ユーザーページでは、作成済みのレポートやダッシュボードを閲覧することができます。また、お気に入りやタグ付け機能などの機能も実装しています。

      定義ページでは、レポートやダッシュボードの作成や編集を行うことができます。表やグラフなどのビジュアライゼーションや、抽出条件、閲覧権限の設定など、様々な設定が可能です。

      管理者ページでは、ユーザーやグループの管理、アクセス権限の設定、データソース・データモデルの設定、システムの設定などを行うことができます。データのバックアップ/リストア機能も実装しています。
    `,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "TypeScript", "CakePHP", "PostgreSQL", "Docker", "AWS"],
    role: "設計 / フロントエンド・バックエンド開発",
  },
  {
    title: "大学内 DWH構築",
    description: `
      大学内様々なシステムからデータを抽出し、DWH(データウェアハウス)を構築。

      大学のDX化に伴う、基盤環境の構築を行いました。学内に存在するあらゆるデータを1つのDBに統合(複製)し、データの分析や研究への活用を可能にしました。
      
      このDWHは、学生の研究でも使用されるため、匿名化する処理を行なっています。適切な権限を持ったユーザーのみが匿名化されたユーザーの名前を確認することができるようになっています。
    `,
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tech: ["Oracle", "ADW"],
    role: "プロジェクトリーダー / 設計 / 開発",
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023年取得",
  },
  {
    name: "応用情報技術者試験",
    issuer: "IPA",
    date: "2021年取得",
  },
  {
    name: "基本情報技術者試験",
    issuer: "IPA",
    date: "2021年取得",
  },
];
