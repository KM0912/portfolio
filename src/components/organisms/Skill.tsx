import React, { useState } from "react";
import { Box, styled } from "@mui/material";
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
import SkillListTabs from "../molecules/SkillListTabs";

const StyledImg = styled("img")({
  width: "50px",
  height: "50px",
  objectFit: "contain",
});

const Skill = () => {
  const [currenTab, setCurrentTab] = useState(0);
  const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const contents = (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      gap={2}
      height="100%"
    >
      <SkillListTabs currentTab={currenTab} onTabChange={onTabChange} />
      {Object.keys(SkillList).map((key, index) => (
        <div
          key={key}
          style={{ height: "100%", width: "100%" }}
          hidden={index !== currenTab}
        >
          <Box display="flex" justifyContent="center" width="100%" gap={2}>
            {SkillList[key as keyof typeof SkillList].skills.map((skill) => (
              <StyledImg key={skill.name} src={skill.src} alt={skill.alt} />
            ))}
          </Box>
          <RadarChartComponent
            data={SkillList[key as keyof typeof SkillList]}
          />
        </div>
      ))}
    </Box>
  );
  return <Contents title="Skill" contents={contents} />;
};

const RadarChartComponent = ({ data }: { data: SkillType }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.skills}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" radius={200} tickSize={20} />
        <PolarRadiusAxis angle={90} domain={[0, 5]} tickCount={6} />
        <Radar {...data.radarChart} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Skill;
