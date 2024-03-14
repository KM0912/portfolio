import React, { useMemo } from "react";
import { styled, Box, Typography } from "@mui/material";
import { calcAge } from "../../utils/ageCalculator";
import Contents from "./Contents";

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

const About = ({ birthday }: Props): JSX.Element => {
  const age = useMemo(() => calcAge(new Date(birthday)), [birthday]);
  const contents = (
    <StyledBox>
      <StyledImg src="images/icon.webp" alt="icon" />
      <LeftAlignedBox>
        <Typography variant="body1">Handle Name: @toraKM</Typography>
        <Typography variant="body1">Age: {age}</Typography>
        <Typography variant="body1">Job: Web Developer</Typography>
      </LeftAlignedBox>
    </StyledBox>
  );

  return <Contents title="About" contents={contents} />;
};

export default About;
