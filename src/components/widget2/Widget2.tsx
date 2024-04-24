import { Card, styled } from "@mui/material";
import React from "react";

type Props = {};
const Root = styled(Card)(() => ({
  borderRadius: 12,
}));

const Widget2 = (props: Props) => {
  return <Root>Widget2</Root>;
};

export default Widget2;
