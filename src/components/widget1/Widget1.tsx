import { Grid } from "@mui/material";
import CardItem from "./CardItem";

type Props = {};

const Widget1 = (_props: Props) => {
  return (
    <Grid container spacing={4} mt={30}>
      <Grid item md={3}>
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
      </Grid>
    </Grid>
  );
};

export default Widget1;
