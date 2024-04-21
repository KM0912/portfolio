import { Tab, Tabs } from "@mui/material";
import React from "react";
import { SkillList } from "../../../config/skillList";

type Props = {
  currentTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
};

const SkillListTabs = ({ currentTab, onTabChange }: Props) => {
  return (
    <Tabs
      value={currentTab}
      onChange={onTabChange}
      aria-label="basic tabs example"
    >
      {Object.keys(SkillList).map((key) => (
        <Tab label={key} />
      ))}
    </Tabs>
  );
};

export default SkillListTabs;
