import { Button, Grid, Paper, Typography, styled } from "@mui/material";

type Props = {};
const Root = styled(Paper)(() => ({
  borderRadius: 16,
  padding: 16,
}));

const MyPoints = (_props: Props) => {
  return (
    <Root>
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <Typography variant="h5">My points</Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary">
            Visit Dashboard
          </Button>
        </Grid>
      </Grid>
    </Root>
  );
};

export default MyPoints;
