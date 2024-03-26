import React from "react";
import { Box, Tooltip, styled } from "@mui/material";
import { colors } from "../../config/colors";
import { SITE_TITLE } from "../../config/config";
import { SnsItem, SnsList } from "../../config/snsList";

type SnsProps = {
  sns: SnsItem;
};

const StyledHeader = styled("header")({
  height: "32px",
  backgroundColor: colors.headerBackground,
  alignItems: "center",
  color: colors.headerColor,
  borderBottom: `3px solid ${colors.headerBorder}`,
});

const StyledP = styled("p")({
  margin: 0,
});

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginLeft: 10,
  marginRight: 10,
  alignItems: "center",
  height: "100%",
});

const StyledImg = styled("img")({
  width: "80%",
  height: "100%",
  objectFit: "contain",
});

const StyledLink = styled("a")({
  color: colors.headerColor,
});

const SnsLink = ({ sns }: SnsProps) => (
  <Tooltip key={sns.name} title={sns.name} placement="bottom">
    <StyledLink key={sns.name} href={sns.link} target="_blank" rel="noreferrer">
      <StyledImg key={sns.name} src={sns.src} alt={sns.alt} />
    </StyledLink>
  </Tooltip>
);

const Header = () => {
  return (
    <StyledHeader>
      <StyledBox>
        <StyledP>{SITE_TITLE}</StyledP>
        <Box display="flex" gap={2} height={"100%"}>
          {SnsList.map((sns) => (
            <SnsLink key={sns.name} sns={sns} />
          ))}
        </Box>
      </StyledBox>
    </StyledHeader>
  );
};

export default Header;
