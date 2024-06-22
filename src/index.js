import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {APIProvider} from '@vis.gl/react-google-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const googleMapScript = document.createElement('script');
// googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCcl8ddxZ2CRJSlI7mvALrMU13MIlhlYaA&libraries=places`;
// googleMapScript.setAttribute('async','');
// googleMapScript.setAttribute('defer','');
// window.document.body.appendChild(googleMapScript);
root.render(
  <div>
  <APIProvider apiKey={'AIzaSyCcl8ddxZ2CRJSlI7mvALrMU13MIlhlYaA'} onLoad={() => console.log('Maps API has loaded.')}>
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
