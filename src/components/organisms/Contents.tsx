import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledBox = styled(Box)({
  padding: "16px",
  display: "flex",
  gap: "1.25rem",
});

type Props = {
  title: string;
  contents: React.ReactNode;
};

const Contents = ({ title, contents }: Props): JSX.Element => {
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      <StyledBox>{contents}</StyledBox>
    </>
  );
};

export default Contents;
