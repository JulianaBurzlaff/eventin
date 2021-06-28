import React from "react";

import GlobalStyle from "./styles/GlobalStyle";
import Routes from "./routes";
import AppProvider from "./providers";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </SnackbarProvider>
  );
}

export default App;
