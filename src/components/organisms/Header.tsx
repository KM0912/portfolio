import { Container, styled } from "@mui/material";
import React from "react";
import { colors } from "../../config/colors";
import { SITE_TITLE } from "../../config/config";

const StyledHeader = styled("header")({
  height: "32px",
  backgroundColor: colors.headerBackground,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: colors.headerColor,
  borderBottom: `3px solid ${colors.headerBorder}`,
});

const StyledP = styled("p")({
  margin: 0,
});

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledP>{SITE_TITLE}</StyledP>
      </Container>
    </StyledHeader>
  );
};

export default Header;
