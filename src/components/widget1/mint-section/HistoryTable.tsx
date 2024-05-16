import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.focus,
    color: theme.palette.common.black,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AddressCell = styled("div")(({ theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100px", // Adjust this width as needed
  },
}));

const histories = [
  {
    address: "BFjgoGvjkMcFuPPvpDLJHwKTSMneaP3nNsz1uCbz69RW",
    count: 2,
    timestamp: "2024-05-16",
  },
  {
    address: "BFjgoGvjkMcFuPPvpDLJHwKTSMneaP3nNsz1uCbz69RW",
    count: 2,
    timestamp: "2024-05-16",
  },
  {
    address: "BFjgoGvjkMcFuPPvpDLJHwKTSMneaP3nNsz1uCbz69RW",
    count: 2,
    timestamp: "2024-05-16",
  },
  {
    address: "BFjgoGvjkMcFuPPvpDLJHwKTSMneaP3nNsz1uCbz69RW",
    count: 2,
    timestamp: "2024-05-16",
  },
  {
    address: "BFjgoGvjkMcFuPPvpDLJHwKTSMneaP3nNsz1uCbz69RW",
    count: 2,
    timestamp: "2024-05-16",
  },
  // Add more data as needed
];

export default function TxTable() {
  return (
    <TableContainer component={Paper} sx={{ overflow: "hidden" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell width={50}>Address</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {histories.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{ color: "#39A0FF" }}
              >
                <AddressCell>
                  <Typography
                    component={"a"}
                    href={`https://solscan.io/account/${row.address}`}
                    target="_blank"
                    noWrap
                  >
                    {row.address}
                  </Typography>
                </AddressCell>
              </StyledTableCell>
              <StyledTableCell align="right">{row.count}</StyledTableCell>
              <StyledTableCell align="right">{row.timestamp}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
