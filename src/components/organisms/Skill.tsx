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
import { SkillList, SkillType } from "../../config/skillList";

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
