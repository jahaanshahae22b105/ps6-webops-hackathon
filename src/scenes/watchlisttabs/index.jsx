import Plot from "react-plotly.js";
import { useEffect, useState } from "react";
import { API_KEY } from "../../alphavapi/alphavapi";
import { color } from "@chakra-ui/system";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export default function WatchlistPlot(stockSymbol) {

 {/*
  const [plotData, setPlotData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);




  async function fetchHistoricalData (stockSymbol) {

    let responseData = null;
    let API_Call = `https://api.stockdata.org/v1/data/eod?symbols=${stockSymbol}&api_token=Wl20WxkYWzO5uwtzFwkFKP2TqKHXQcRmASAuzirX`
    fetch(API_Call)
      .then((response) => response.json())
      .then((data) => {
             
            
            responseData = data ;
            console.log(responseData);
            
            let xPlotData = [];
            let yPlotData = [];
            responseData.data.map((item) => {
              xPlotData.push(item.date);
              yPlotData.push(item.close);
              
             
            });
            const returnData = [xPlotData, yPlotData];
            console.log(returnData);
            return(returnData);
      })
      .catch((error) => {
        
        console.error('Error fetching data:', error);
      });
  };



    async function fetchData() {
      try {
      setPlotData(await fetchHistoricalData('AAPL'));
      console.log("hellos");
      //setXData(temp[0]);
      //setYData(temp[1]);
      
      } catch (error)
      {
        console.error(error);
      }
      // Do something with xdata and ydata here
    }
  */}

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [stockChartXValues, setStockChartXValues] = useState();
  const [stockChartYValues, setStockChartYValues] = useState();

  stockSymbol = 'AAPL';

  async function fetchStock() {
    
    let API_Call = `https://api.stockdata.org/v1/data/eod?symbols=${stockSymbol}&api_token=tLSB0ZARM7eASCMicfvkt8AAhILFyjz0lW6VfvID`
    

    fetch(API_Call)
      .then(
        function(response) {
          console.log("query done");
          return response.json();
          
        }
      )
      .then(
        function(data) {
          

            let xPlotData = [];
            let yPlotData = [];
            data.data.map((item) => {
              xPlotData.push(item.date);
              yPlotData.push(item.close);             
            });
            setStockChartXValues(xPlotData);
            setStockChartYValues(yPlotData);
            console.log(stockChartXValues);

          // console.log(stockChartXValuesFunction);
          
        }
      )
  }
    
  


  useEffect(() => {
    fetchStock();
  }, []);





  return (

    <>

      
      <Plot
        background="rgba (0,0,0,)"
        data={[
          { 
            x: stockChartXValues,
            y: stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: colors.greenAccent[500]},
          },
          
        ]}
        layout={ {width: "100%", height: "100%", title: ""}}
        plot_bgcolor={colors.primary[900]}
        
      />
        
    </>

  );
};