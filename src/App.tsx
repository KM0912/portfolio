import React from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";
import SideMenu from "./components/organisms/SideMenu";
import { Routes, Route } from "react-router-dom";
import About from "./components/organisms/About";
import Works from "./components/organisms/Works";
import Skill from "./components/organisms/Skill";
import Sns from "./components/organisms/Sns";

const MENU_ITEMS = [
  { id: "about", icon: "😸", text: "About" },
  { id: "works", icon: "😼", text: "Works" },
  { id: "skill", icon: "😺", text: "Skill" },
  { id: "sns", icon: "😻", text: "SNS" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Container style={{ backgroundColor: "gray" }}>
              <SideMenu menuItems={MENU_ITEMS} />
            </Container>
          </Grid>
          <Grid xs={8}>
            <Container style={{ backgroundColor: "gray" }}>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} /> {/*追加*/}
                <Route path="/skill" element={<Skill />} /> {/*追加*/}
                <Route path="/sns" element={<Sns />} /> {/*追加*/}
              </Routes>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
