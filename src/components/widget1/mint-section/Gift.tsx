import {
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  styled,
} from "@mui/material";
import { useState } from "react";
import SolLogo from "../../../assets/solPriceLogo.webp";

type Props = {};
const CountText = styled(TextField)(() => ({
  width: "16ch",
}));
const Gift = (_props: Props) => {
  const [count, setCount] = useState<number>(0);
  const [address, setAddress] = useState<string>("");

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item md={6}>
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            label="to address"
            helperText="Make sure the address is SOL address"
          />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        mt={4}
      >
        <Grid item>
          <Grid container flexDirection={"column"}>
            <CountText
              //   fullWidth
              type="number"
              value={count}
              onChange={(e) => {
                setCount(Number(e.target.value));
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                      color="primary"
                    >
                      +
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <IconButton
                      size="small"
                      onClick={() => {
                        setCount(count - 1);
                      }}
                      color="primary"
                    >
                      -
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ float: "right" }}>
            {" "}
            <img
              src={SolLogo}
              width={"20px"}
              style={{ marginRight: 10 }}
            />{" "}
            {count * 0.01} SOL Gift
          </Button>
        </Grid>
        <Grid container justifyContent={"space-between"} mt={4}>
          {[1, 5, 10, 50, 100].map((item, index) => (
            <Chip
              sx={{ width: "8ch" }}
              label={item}
              onClick={() => setCount(item)}
              key={index}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Gift;
