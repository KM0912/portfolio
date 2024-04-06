import React, { useMemo } from "react";
import { styled, Box, Typography, Grid } from "@mui/material";
import { calcAge } from "../../utils/ageCalculator";
import Contents from "./Contents";

const StyledBox = styled(Box)({
  padding: "16px",
  display: "flex",
  gap: "1.25rem",
  width: "100%",
});

const StyledImg = styled("img")({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  objectFit: "cover",
});

const LeftAlignedBox = styled(Box)({
  textAlign: "left",
  width: "100%",
});

type Props = {
  birthday: string;
};

const About = ({ birthday }: Props): JSX.Element => {
  const age = useMemo(() => calcAge(new Date(birthday)), [birthday]);

  const ProfileItem = ({
    title,
    value,
  }: {
    title: string;
    value: string | number;
  }) => (
    <Grid container spacing={1} alignItems={"center"}>
      <Grid item xs={4} textAlign={"end"}>
        <Typography variant="h3" style={{ lineHeight: "1.5" }}>
          {title}:
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" style={{ lineHeight: "1.5" }}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );

  const contents = (
    <StyledBox>
      <StyledImg src="images/icon.webp" alt="icon" />
      <LeftAlignedBox>
        <ProfileItem title="Handle Name" value="@toraKM" />
        <ProfileItem title="Age" value={age} />
        <ProfileItem title="Job" value="Web Developer" />
      </LeftAlignedBox>
    </StyledBox>
  );

  return <Contents title="About" contents={contents} />;
};

export default About;
