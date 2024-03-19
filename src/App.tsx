import React from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container, createTheme, styled } from "@mui/material";
import SideMenu from "./components/organisms/SideMenu";
import { Routes, Route } from "react-router-dom";
import About from "./components/organisms/About";
import Works from "./components/organisms/Works";
import Skill from "./components/organisms/Skill";
import Sns from "./components/organisms/Sns";
import Header from "./components/organisms/Header";
import { colors } from "./config/colors";
import { BIRTHDAY } from "./config/config";
import { ThemeProvider } from "@emotion/react";

const MENU_ITEMS = [
  { id: "about", emoji: "😸", text: "About" },
  { id: "works", emoji: "😼", text: "Works" },
  { id: "skill", emoji: "😺", text: "Skill" },
  { id: "sns", emoji: "😻", text: "SNS" },
];

const theme = createTheme({
  typography: {
    h3: {
      color: "teal",
      fontFamily: "Arial",
      fontSize: "24px",
    },
  },
});

const StyledMainContainer = styled(Container)({
  minHeight: "100vh",
  paddingTop: "16px",
  backgroundColor: colors.bodyBackground,
});

const StyledContentContainer = styled(Container)({
  backgroundColor: colors.contentBackground,
  padding: "16px",
  borderRadius: "8px",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <StyledMainContainer>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <Container>
                <SideMenu menuItems={MENU_ITEMS} />
              </Container>
            </Grid>
            <Grid xs={8}>
              <StyledContentContainer>
                <Routes>
                  <Route path="/" element={<About birthday={BIRTHDAY} />} />
                  <Route
                    path="/about"
                    element={<About birthday={BIRTHDAY} />}
                  />
                  <Route path="/works" element={<Works />} />
                  <Route path="/skill" element={<Skill />} />
                  <Route path="/sns" element={<Sns />} />
                </Routes>
              </StyledContentContainer>
            </Grid>
          </Grid>
        </StyledMainContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
