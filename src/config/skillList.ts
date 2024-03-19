export type SkillType = {
  displayName: string;
  skills: {
    name: string;
    level: number;
    src: string;
    alt: string;
  }[];
};

export type SkillListType = {
  frontEnd: SkillType;
  backEnd: SkillType;
  database: SkillType;
  tool: SkillType;
};

export const SkillList: SkillListType = {
  frontEnd: {
    displayName: "FrontEnd",
    skills: [
      {
        name: "JavaScript",
        level: 3,
        src: "/images/skill/javascript.svg",
        alt: "JavaScript",
      },
      {
        name: "TypeScript",
        level: 3,
        src: "/images/skill/typescript.svg",
        alt: "TypeScript",
      },
      { name: "React", level: 3, src: "/images/skill/react.svg", alt: "react" },
      {
        name: "Next.js",
        level: 2,
        src: "/images/skill/next-js.svg",
        alt: "Next.js",
      },
    ],
  },
  backEnd: {
    displayName: "BackEnd",
    skills: [
      { name: "php", level: 3, src: "/images/skill/php.svg", alt: "php" },
      {
        name: "python",
        level: 3,
        src: "/images/skill/python.svg",
        alt: "python",
      },
      {
        name: "Node.js",
        level: 2,
        src: "/images/skill/node-js.svg",
        alt: "Node.js",
      },
      {
        name: "laravel",
        level: 2,
        src: "/images/skill/laravel.svg",
        alt: "laravel",
      },
      {
        name: "cakephp",
        level: 3,
        src: "/images/skill/cakephp.svg",
        alt: "cakephp",
      },
      {
        name: "Express",
        level: 1,
        src: "/images/skill/express.svg",
        alt: "Express",
      },
    ],
  },
  database: {
    displayName: "Database",
    skills: [
      { name: "MySQL", level: 3, src: "/images/skill/mysql.svg", alt: "MySQL" },
      {
        name: "PostgreSQL",
        level: 3,
        src: "/images/skill/postgresql.svg",
        alt: "PostgreSQL",
      },
      {
        name: "SQLServer",
        level: 3,
        src: "/images/skill/sql-server.svg",
        alt: "SQLServer",
      },
    ],
  },
  tool: {
    displayName: "Tool",
    skills: [
      { name: "Git", level: 3, src: "/images/skill/git.svg", alt: "Git" },
      {
        name: "GitHub",
        level: 3,
        src: "/images/skill/github.svg",
        alt: "GitHub",
      },
      { name: "AWS", level: 2, src: "/images/skill/aws.svg", alt: "AWS" },
      {
        name: "Docker",
        level: 2,
        src: "/images/skill/docker.svg",
        alt: "Docker",
      },
    ],
  },
};
