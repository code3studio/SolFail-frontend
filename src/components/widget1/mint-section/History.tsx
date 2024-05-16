import { Divider, Paper, Typography, styled } from "@mui/material";
import TxTable from "./HistoryTable";

type Props = {};
const Root = styled(Paper)(() => ({
  borderRadius: 16,
  padding: 16,

  //   width: "100%",

  //   width: "100%",
}));

const History = (_props: Props) => {
  return (
    <Root>
      <Typography variant="h5">Transaction History</Typography>
      <Divider sx={{ my: 2 }} />
      <TxTable />
      {/* {histories.map((item, index) => (
        <Box
          key={index}
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"}
          columnGap={2}
          mt={2}
        >
          <Typography noWrap>{item.address}</Typography>
          <Typography>{item.count}</Typography>
          <Typography>{item.timestamp}</Typography>
        </Box>
      ))} */}
    </Root>
  );
};

export default History;
