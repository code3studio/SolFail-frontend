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
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  // SystemProgram,
  // Transaction,
} from "@solana/web3.js";
import { METADATA_URL, QUICKNODE_RPC } from "../../../constant";
import axios from "axios";
import { Metaplex, PublicKey, keypairIdentity } from "@metaplex-foundation/js";
import { useWallet } from "@solana/wallet-adapter-react";
import NFTDialog from "./NFTDialog";
import { MetadataType } from "../../../type";
import { toast } from "react-toastify";

type Props = {
  handleClose: (e: boolean) => void;
};

const CountText = styled(TextField)(() => ({
  width: "16ch",
}));

const secret = [
  4, 203, 170, 140, 52, 111, 194, 79, 184, 206, 170, 25, 182, 108, 154, 75, 251,
  39, 109, 71, 204, 249, 137, 240, 47, 92, 5, 61, 247, 48, 183, 151, 152, 91,
  68, 24, 87, 160, 224, 30, 240, 38, 70, 237, 131, 147, 128, 232, 21, 89, 248,
  148, 251, 123, 115, 191, 129, 24, 99, 200, 72, 8, 202, 5,
];

const Mint = ({ handleClose }: Props) => {
  const wallet = useWallet();

  const [count, setCount] = useState<number>(0);
  const [met, setMet] = useState<MetadataType[] | []>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleMint = async () => {
    try {
      if (!wallet.publicKey) return;
      handleClose(true);
      const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC, {
        commitment: "confirmed",
      });
      const WALLET = Keypair.fromSecretKey(new Uint8Array(secret));
      const METAPLEX = Metaplex.make(SOLANA_CONNECTION).use(
        keypairIdentity(WALLET)
      );

      const MINT_PRICE_LAMPORTS = 0.1 * LAMPORTS_PER_SOL; // 1 SOL
      // const PAYMENT_RECEIVER = new PublicKey(
      //   "GdxLvb63NkKpg6Zgmt4UEwZrNpZuBPPRSiCNY6bcjt9w"
      // );

      // Check if the user has enough SOL to mint
      const userBalance = await SOLANA_CONNECTION.getBalance(wallet.publicKey);
      if (userBalance < MINT_PRICE_LAMPORTS) {
        throw new Error("Insufficient balance to mint NFT.");
      }

      // Send SOL to payment receiver
      // const transaction = new Transaction().add(
      //   SystemProgram.transfer({
      //     fromPubkey: wallet.publicKey,
      //     toPubkey: PAYMENT_RECEIVER,
      //     lamports: MINT_PRICE_LAMPORTS,
      //   })
      // );

      // const signature = await wallet.sendTransaction(
      //   transaction,
      //   SOLANA_CONNECTION
      // );
      // await SOLANA_CONNECTION.confirmTransaction(signature, "finalized");
      // console.log("Payment transaction signature", signature);

      // Mint the NFT to the user's wallet
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/signature/${count}`
      );
      console.log("res==", res.data);

      // Use Promise.all to mint NFTs concurrently
      //@ts-ignore
      // Use Promise.all to mint NFTs concurrently
      // let metadata: MetadataType[] | [] = [];
      const mintPromises = res.data.map((data, i) =>
        METAPLEX.nfts()
          .create(
            {
              uri: `${METADATA_URL}${data.hash}`,
              name: `FailSol ${i + 1}`,
              sellerFeeBasisPoints: 500,
              symbol: "FAIL",
              creators: [
                { address: WALLET.publicKey, share: 80 },
                {
                  address: new PublicKey(
                    "DxqA9eeszbpVgYAfESrUMWC7Jur4kX7ZCQjMPjFKFJ57"
                  ),
                  share: 20,
                },
              ],
              isMutable: false,
              //@ts-ignore
              tokenOwner: wallet.publicKey,
            },
            { commitment: "finalized" }
          )
          .then(({ nft }) => {
            console.log(`Success!🎉 NFT ${i + 1}`);
            console.log(
              `Minted NFT: https://explorer.solana.com/address/${nft.address}?cluster=devnet`
            );
            console.log("nft==", nft);
            return axios.get(nft.uri).then((res) => ({
              ...res.data,
              address: nft.address,
            }));
          })
          .catch((error) => {
            console.log(`Error minting NFT ${i + 1}:`, error);
            throw new Error(error);
          })
      );

      const metadata = await Promise.all(mintPromises);
      console.log("metadata===", metadata);

      setMet([...metadata]);
      setOpen(true);
      console.log("Finished minting all NFTs.");
    } catch (error) {
      console.log("error==", error);
      //@ts-ignore
      toast(error.message);
    } finally {
      handleClose(false);
    }
  };
  console.log("met==", met);

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
          <Button
            onClick={handleMint}
            variant="contained"
            sx={{ float: "right" }}
          >
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

      <NFTDialog data={met} open={open} handleClose={(_e) => setOpen(false)} />
    </>
  );
};

export default Mint;
