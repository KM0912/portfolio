import React from "react";
import { styled, Box, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  padding: "16px",
});

const About = () => {
  return (
    <StyledBox>
      <Typography variant="h2">About</Typography>
    </StyledBox>
  );
};

export default About;
