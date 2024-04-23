import { Card, Typography, styled } from '@mui/material'

type Props = {}
const Root = styled(Card)(() => ({
    borderRadius:4,
    padding:6,
    // backgroundColor:'red',
    marginTop:'200px',
    width:'100%'
}))

const CardItem = (_props: Props) => {
  return (
    <Root>
        <Typography>SOL Supply</Typography>
        <Typography fontWeight={900}>574,605,803.19</Typography>
    </Root>
  )
}

export default CardItem