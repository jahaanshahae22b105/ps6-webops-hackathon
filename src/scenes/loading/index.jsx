import { Center, Spinner } from "@chakra-ui/react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export default function Loading () {


    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <>
    <Center>
        <Spinner color={colors.greenAccent[500]} size="large">

        </Spinner>
        </Center>
    </>
  )
}