import React, { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.scss';

interface MapMarkersData {
  latitude: number;
  longitude: number;
}

export default function Map({markersData}: {markersData: MapMarkersData[]}) {

    // eslint-disable-next-line
    const [viewport, setViewport] = useState ({
        latitude: 37.9475,
        longitude: -91.7636,
        zoom: 3
      });
    
    if (!markersData) {
      return null;
    }

      return (
        <div className='MapContainer'>
          <ReactMapGl mapboxAccessToken={'pk.eyJ1Ijoiam9ncm9oIiwiYSI6ImNsc2t1c3p3aTAyZ20ya3MxdHZwNzNoOTkifQ.oc5gR8IfQbd4Ca5DN6PfOA'}
          {...viewport}
          mapStyle='mapbox://styles/mapbox/outdoors-v12'
          style={{borderRadius: 20}}
          >
          {
            markersData.map((marker, index) => (
              <Marker
                key={index}
                latitude={marker.latitude}
                longitude={marker.longitude}
              ></Marker>
            ))
          }
          </ReactMapGl>
        </div>
      );
}