import "./App.css";
import { Container, Grid, ThemeProvider } from "@mui/material";
import Header from "./components/header/Header";
import { theme } from "./theme";
import Widget1 from "./components/widget1/Widget1";
import Widget2 from "./components/widget2/Widget2";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="xl">
          <Widget1 />
          <Grid container spacing={4} mt={4}>
            <Grid item md={6}>
              <Widget2 />
            </Grid>
            <Grid item md={6}>
              <Widget2 />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
