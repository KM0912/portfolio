import React from "react";
import { styled, Box, Typography, Grid } from "@mui/material";
import { workList } from "../../config/workList";
import Contents from "./Contents";

const StyledBox = styled(Box)({
  padding: "16px",
});

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
  border: "1px solid #ddd",
});

const Works = () => {
  const contents = (
    <StyledBox>
      <Grid container spacing={2}>
        {workList.map((work, index) => (
          <React.Fragment key={index}>
            <Grid item xs={5}>
              <StyledImg src={work.img} alt={work.title} />
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h3">{work.title}</Typography>
              <Typography>{work.description}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </StyledBox>
  );

  return <Contents title="Works" contents={contents} />;
};

export default Works;
