import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router/router";
import React from "react";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DynamicContextProvider
          settings={{
            environmentId: "2962e077-c8af-435f-8ef2-84f883686227",
            walletConnectors: [SolanaWalletConnectors],
          }}
        >
          <React.Suspense fallback={<p>hello</p>}>
            <RouterProvider router={routers} />
          </React.Suspense>
        </DynamicContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
