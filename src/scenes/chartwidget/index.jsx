// TradingViewWidget.jsx

import { useTheme } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { tokens } from '../../theme';

let tvScriptLoadingPromise;

export default function ChartWidget() {
  const onLoadScriptRef = useRef();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_9b2e3') && 'TradingView' in window) {
          new window.TradingView.widget({
            outerHeight: "max",
            symbol: "NASDAQ:AAPL",
            interval: "5",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            backgroundColor: colors.primary[400],
            gridColor: "rgba(182, 182, 182, 0.06)",
            allow_symbol_change: true,
            container_id: "tradingview_9b2e3"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_9b2e3' />
      <div className="tradingview-widget-copyright">

      </div>
    </div>
  );
}
