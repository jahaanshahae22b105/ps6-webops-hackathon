import { Box, Tab, useTheme } from "@mui/material";
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Header from "../../components/Header";
import { tokens } from "../../theme";
import WlWidget from "../watchlisttabs";
import WatchlistTabs from "../watchlisttabs";
import { useState } from "react";
import SingleViewWidget from "../singletickerwidget";

const Watchlist= (user) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const userData = user.user;
    

    //Tab navigation
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
  
  
    return (
    <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="WATCHLIST" subtitle="Track Stocks of your Interest" />
        </Box>


        {/* GRID & CHARTS */}
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="100px"
            gap="20px"
        >
            <Box
            gridColumn="span 12"
            gridRow="span 4"
           
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="clip"
            >
            
            <SingleViewWidget></SingleViewWidget>
            </Box>
            {/* ROW 1 */}
            <Box
            gridColumn="span 12"
            gridRow="span 4"
        
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="clip"
            >
                
                <WatchlistTabs watchlist={userData.watchlist} />
            </Box>
            
        </Box>
    </Box>

    );


};


export default Watchlist;