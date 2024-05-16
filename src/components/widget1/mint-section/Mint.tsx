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

const Mint = (_props: Props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
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
            {count * 0.01} SOL Mint
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        mt={4}
        // maxWidth={"200px"}
      >
        {[1, 5, 10, 50, 100].map((item, index) => (
          <Chip
            sx={{ width: "8ch" }}
            label={item}
            onClick={() => setCount(item)}
            key={index}
          />
        ))}
      </Grid>
    </>
  );
};

export default Mint;
