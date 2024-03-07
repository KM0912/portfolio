import React from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";
import SideMenu from "./components/organisms/SideMenu";

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
              TODO:コンテンツの表示エリアを実装する
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
