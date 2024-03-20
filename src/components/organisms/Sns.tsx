import React from "react";
import { styled, Box, Typography } from "@mui/material";
import { SnsList } from "../../config/snsList";

const StyledBox = styled(Box)({
  padding: "16px",
});

const StyledImg = styled("img")({
  width: "50px",
  height: "50px",
  objectFit: "contain",
});

const Sns = () => {
  return (
    <StyledBox>
      <Typography variant="h2">SNS</Typography>
      <Box display="flex" justifyContent="center" width="100%" gap={2}>
        {SnsList.map((sns) => (
          <Box
            key={sns.name}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <a href={sns.link} target="_blank" rel="noreferrer">
              <StyledImg key={sns.name} src={sns.src} alt={sns.alt} />
            </a>
            <Typography>{sns.name}</Typography>
          </Box>
        ))}
      </Box>
    </StyledBox>
  );
};

export default Sns;
