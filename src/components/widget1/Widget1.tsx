import { Box, Grid } from "@mui/material";
import MintSection from "./mint-section/MintSection";
import ShowSection from "./show-section";
import History from "./mint-section/History";

type Props = {};

const Widget1 = (_props: Props) => {
  return (
    <Grid container mt={8} spacing={4} alignItems={"stretch"}>
      <Grid item md={6} xs={12}>
        <MintSection />
        <Box mt={4} />
        <History />
      </Grid>
      <Grid item md={6} xs={12}>
        <ShowSection />
      </Grid>
      {/* <Grid item md={3}>
        <CardItem />
      </Grid>
      <Grid item md={3}>
        <CardItem />
      </Grid>
      <Grid item md={3}>
        <CardItem />
      </Grid>
      <Grid item md={3}>
        <CardItem />
      </Grid> */}
    </Grid>
  );
};

export default Widget1;
