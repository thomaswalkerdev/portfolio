import { Provider } from "react-redux";
import { store } from "./store/store";
import React from "react";
import { Box, Button, Grommet, grommet, Heading } from "grommet";
import { Notification } from "grommet-icons";

function App() {
  const AppBar = (props) => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    />
  );

  return (
    <Provider store={store}>
      <Grommet theme={grommet}>
        <Box fill>
          <AppBar>
            <Heading level="3" margin="none">
              My App
            </Heading>
            <Button icon={<Notification />} onClick={() => {}} />
          </AppBar>
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
              height="50vh"
            >
              sidebar
            </Box>
            <Box flex align="center" justify="center">
              app body
            </Box>
          </Box>
        </Box>
      </Grommet>
    </Provider>
  );
}

export default App;
