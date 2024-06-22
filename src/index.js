import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {APIProvider} from '@vis.gl/react-google-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <APIProvider apiKey={'KEY'} onLoad={() => console.log('Maps API has loaded.')}>
    <React.StrictMode>
          <App />
    </React.StrictMode>
  </APIProvider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
