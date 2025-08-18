import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/Router';
import './index.css';
import '@fontsource/oswald/700.css';
import '@fontsource/bebas-neue';
import '@fontsource/anton';
import '@fontsource/playfair-display';
import '@fontsource/lora';
import '@fontsource/merriweather';
import '@fontsource/inter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);