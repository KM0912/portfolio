import React from "react";
import { styled, Box, Typography } from "@mui/material";
import { calcAge } from "../../utils/ageCalculator";

const StyledBox = styled(Box)({
  padding: "16px",
  display: "flex",
  gap: "1.25rem",
});

const StyledImg = styled("img")({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  objectFit: "cover",
});

const LeftAlignedBox = styled(Box)({
  textAlign: "left",
});

type Props = {
  birthday: string;
};

const About: React.FC<Props> = ({ birthday }) => {
  return (
    <>
      <Typography variant="h2">About</Typography>
      <StyledBox>
        <StyledImg src="images/icon.webp" alt="icon" />
        <LeftAlignedBox>
          <Typography variant="body1">Handle Name: @toraKM</Typography>
          <Typography variant="body1">
            Age: {calcAge(new Date(birthday))}
          </Typography>
          <Typography variant="body1">Job: Web Developer</Typography>
        </LeftAlignedBox>
      </StyledBox>
    </>
  );
};

export default About;
