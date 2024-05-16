import { Box, FormControlLabel, Paper, Radio, styled } from "@mui/material";
import { useState } from "react";
import Mint from "./Mint";
import Gift from "./Gift";

type Props = {};

const Root = styled(Paper)(() => ({
  borderRadius: 16,
  padding: 16,
  //   width: "100%",

  //   width: "100%",
}));

const MintSection = (_props: Props) => {
  const [mode, setMode] = useState<"mint" | "gift">("mint");
  return (
    <Root>
      <FormControlLabel
        control={
          <Radio checked={mode === "mint"} onChange={() => setMode("mint")} />
        }
        label="Mint"
      ></FormControlLabel>
      <FormControlLabel
        control={
          <Radio checked={mode === "gift"} onChange={() => setMode("gift")} />
        }
        label="Gift"
      ></FormControlLabel>
      <Box alignContent={"center"}>
        {mode === "mint" && <Mint />}
        {mode === "gift" && <Gift />}
      </Box>
    </Root>
  );
};

export default MintSection;
