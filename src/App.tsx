import React from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container, createTheme, styled } from "@mui/material";
import SideMenu from "./components/organisms/SideMenu";
import { Routes, Route } from "react-router-dom";
import About from "./components/organisms/About";
import Works from "./components/organisms/Works";
import Skill from "./components/organisms/Skill";
import Header from "./components/organisms/Header";
import { colors } from "./config/colors";
import { BIRTHDAY } from "./config/config";
import { ThemeProvider } from "@emotion/react";

const MENU_ITEMS = [
  { id: "about", emoji: "😸", text: "About" },
  { id: "works", emoji: "😼", text: "Works" },
  { id: "skill", emoji: "😺", text: "Skill" },
];

const theme = createTheme({
  typography: {
    h2: {
      color: colors.bodyColor,
      fontFamily: "Arial",
      fontSize: "32px",
    },
    h3: {
      color: colors.bodyColor,
      fontFamily: "Arial",
      fontSize: "24px",
    },
    body1: {
      color: colors.bodyColor,
    },
  },
});

const StyledDiv = styled("div")({
  backgroundColor: colors.bodyBackground,
});

const StyledMainContainer = styled(Container)({
  minHeight: "100vh",
  paddingTop: "16px",
});

const StyledContentContainer = styled(Container)({
  backgroundColor: colors.contentBackground,
  padding: "16px",
  borderRadius: "8px",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv className="App">
        <Header />
        <StyledMainContainer>
          <Grid container spacing={1}>
            <Grid xs={3}>
              <Container>
                <SideMenu menuItems={MENU_ITEMS} />
              </Container>
            </Grid>
            <Grid xs={9}>
              <StyledContentContainer>
                <Routes>
                  <Route path="/" element={<About birthday={BIRTHDAY} />} />
                  <Route
                    path="/about"
                    element={<About birthday={BIRTHDAY} />}
                  />
                  <Route path="/works" element={<Works />} />
                  <Route path="/skill" element={<Skill />} />
                </Routes>
              </StyledContentContainer>
            </Grid>
          </Grid>
        </StyledMainContainer>
      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
