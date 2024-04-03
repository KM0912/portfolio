import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledBox = styled(Box)({
  padding: "16px",
  display: "flex",
  gap: "1.25rem",
});

const StyledTypography = styled(Typography)({
  fontWeight: 600,
});

type Props = {
  title: string;
  contents: React.ReactNode;
};

const Contents = ({ title, contents }: Props): JSX.Element => {
  return (
    <>
      <StyledTypography variant="h2" align="left">
        {title}
      </StyledTypography>
      <StyledBox>{contents}</StyledBox>
    </>
  );
};

export default Contents;
