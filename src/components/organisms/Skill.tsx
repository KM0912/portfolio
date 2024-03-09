import React from "react";
import { styled, Box, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  padding: "16px",
});

const Skill = () => {
  return (
    <StyledBox>
      <Typography variant="h2">Skill</Typography>
    </StyledBox>
  );
};

export default Skill;
