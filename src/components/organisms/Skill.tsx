import React from "react";
import { Box, Typography, styled } from "@mui/material";
import Contents from "./Contents";

const SkillList = {
  frontEnd: [
    { src: "/images/skill/javascript.svg", alt: "JavaScript" },
    { src: "/images/skill/typescript.svg", alt: "TypeScript" },
  ],
  backEnd: [
    { src: "/images/skill/php.svg", alt: "php" },
    { src: "/images/skill/laravel.svg", alt: "laravel" },
    { src: "/images/skill/cakephp.svg", alt: "cakephp" },
    { src: "/images/skill/react.svg", alt: "react" },
  ],
  database: [
    { src: "/images/skill/mysql.svg", alt: "MySQL" },
    { src: "/images/skill/postgresql.svg", alt: "PostgreSQL" },
    { src: "/images/skill/sql-server.svg", alt: "SQLServer" },
  ],
  tool: [
    { src: "/images/skill/git.svg", alt: "Git" },
    { src: "/images/skill/github.svg", alt: "GitHub" },
    { src: "/images/skill/aws.svg", alt: "AWS" },
    { src: "/images/skill/docker.svg", alt: "Docker" },
  ],
  other: [
    { src: "/images/skill/nextjs.svg", alt: "Next.js" },
    { src: "/images/skill/express.svg", alt: "Express" },
  ],
};

const StyledImg = styled("img")({
  width: "150px",
  height: "150px",
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
    >
      <Typography variant="h3">front-end</Typography>
      <Box display="flex" justifyContent="space-around" width="100%">
        {SkillList.frontEnd.map((skill, index) => (
          <StyledImg key={index} src={skill.src} alt={skill.alt} />
        ))}
      </Box>
      <Typography variant="h3">back-end</Typography>
      <Box display="flex" justifyContent="space-around" width="100%">
        {SkillList.backEnd.map((skill, index) => (
          <StyledImg key={index} src={skill.src} alt={skill.alt} />
        ))}
      </Box>
      <Typography variant="h3">database</Typography>
      <Box display="flex" justifyContent="space-around" width="100%">
        {SkillList.database.map((skill, index) => (
          <StyledImg key={index} src={skill.src} alt={skill.alt} />
        ))}
      </Box>
      <Typography variant="h3">tool</Typography>
      <Box display="flex" justifyContent="space-around" width="100%">
        {SkillList.tool.map((skill, index) => (
          <StyledImg key={index} src={skill.src} alt={skill.alt} />
        ))}
      </Box>
      <Typography variant="h3">other</Typography>
      <Box display="flex" justifyContent="space-around" width="100%">
        {SkillList.other.map((skill, index) => (
          <StyledImg key={index} src={skill.src} alt={skill.alt} />
        ))}
      </Box>
    </Box>
  );
  return <Contents title="Skill" contents={contents} />;
};

export default Skill;
