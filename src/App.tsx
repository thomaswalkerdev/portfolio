import { Provider } from "react-redux";
import { store } from "./store/store";
import React from "react";
import { Box, Grommet, grommet } from "grommet";
import { AppBar } from "./components/app-bar";
import { AppBarContent } from "./components/app-bar-content";
import { Routes, Route } from "react-router-dom";
import Home from "views/home";
import Projects from "views/Projects";
import Experience from "views/Experience";

function App() {
  return (
    <Provider store={store}>
      <Grommet theme={grommet}>
        <AppBar>
          <AppBarContent />
        </AppBar>
        <Box fill align="center" justify="center">
          <Box flex align="center" justify="center" width={{ max: "1200px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </Box>
        </Box>
      </Grommet>
    </Provider>
  );
}

export default App;
