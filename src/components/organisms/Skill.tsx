import React from "react";
import { Box, Typography, styled } from "@mui/material";
import Contents from "./Contents";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

type SkillType = {
  name: string;
  level: number;
  src: string;
  alt: string;
};

const SkillList = {
  frontEnd: [
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
  backEnd: [
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
  database: [
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
  tool: [
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
};

const StyledImg = styled("img")({
  width: "50px",
  height: "50px",
  objectFit: "contain",
});

const Skill = () => {
  const contents = (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      gap={2}
      height="100%"
    >
      {Object.keys(SkillList).map((key) => (
        <React.Fragment key={key}>
          <Typography key={key} variant="h3">
            {key}
          </Typography>
          <Box display="flex" justifyContent="space-around" width="100%">
            {SkillList[key as keyof typeof SkillList].map((skill) => (
              <StyledImg key={skill.name} src={skill.src} alt={skill.alt} />
            ))}
          </Box>
          <RadarChartComponent
            data={SkillList[key as keyof typeof SkillList]}
          />
        </React.Fragment>
      ))}
    </Box>
  );
  return <Contents title="Skill" contents={contents} />;
};

const RadarChartComponent = ({ data }: { data: SkillType[] }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" radius={200} tickSize={20} />
        <PolarRadiusAxis angle={90} domain={[0, 5]} tickCount={6} />
        <Radar
          dataKey="level"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Skill;
