import * as React from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import BarCard from './barcard';
import HideAppBar from './appbar'
import {Map} from '@vis.gl/react-google-maps';

const getPlaces = async () => {
  const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary('places');
  // Restrict within the map viewport.
  let center = new google.maps.LatLng(40.7200708, -73.9838463);
  const request = {
    // required parameters
    fields: ["displayName", "formattedAddress", "businessStatus", "photos", "editorialSummary", "rating","userRatingCount"],
    locationRestriction: {
      center: center,
      radius: 500,
    },
    // optional parameters
    includedPrimaryTypes: ["bar"],
    maxResultCount: 5,
    // rankPreference: SearchNearbyRankPreference.POPULARITY,
    language: "en-US",
    region: "us",
  };
  //@ts-ignore
  const { places } = await Place.searchNearby(request);
  console.log(JSON.stringify(places));
  const formattedPlaces = places.map((place) => ({
    name:place.displayName, 
    image: place.photos[0].getURI({maxHeight: 1000, maxWidth: 1000}),
    description: place.editorialSummary, 
    location: place.formattedAddress,
    rating: place.rating,
    ratingCount: place.userRatingCount
  }))
  console.log(formattedPlaces);
  return formattedPlaces;
}
function App() {
  const [location, setLocation] = React.useState({});
  const [places, setPlaces] = React.useState([])

  const successCallback = (position) => {
    setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
    };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  function gatherLocationData() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
  useEffect(() => {
    gatherLocationData();
    getPlaces().then(p => {setPlaces(p)});
  },[])
  console.log(places)
  return (
    <div className="App" style={{height:"800px"}}>
        <Map
          defaultZoom={17}
          mapId="f442977f4809f415"
          defaultCenter={ { lat: 40.7200708,lng: -73.9838463 } }
          onCameraChanged={ (ev) => {
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)}
          }>
        </Map>
      <header className="App-header">
        <HideAppBar>
        {places.length ?
          places.map((bar) => (
          <BarCard 
            image={bar.image}
            name={bar.name} 
            description={bar.description} 
            location={bar.location}
            rating={bar.rating}
            ratingCount={bar.ratingCount}
          />
        )): null}
        </HideAppBar>
      </header>
    </div>
  );
}

export default App;
