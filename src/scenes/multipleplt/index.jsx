import WatchlistPlot from "../watchlisttabs";

export default function MultiplePlot() {
    return (

        <>
    
          
          <Plot
            data={[
              <WatchlistPlot stockSymbol={} />,
              
              
            ]}
            layout={ {width: "100%", height: "100%", title: 'A Fancy Plot'} }
            background
          />
            
        </>
    
      );
}