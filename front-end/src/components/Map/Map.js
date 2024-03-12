import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.scss';

export default function Map() {

    // eslint-disable-next-line
    const [viewport, setViewport] = useState ({
        latitude: 37.9475,
        longitude: -91.7636,
        zoom: 5
      });
    
    
      return (
        <div className='MapContainer'>
          <ReactMapGl mapboxAccessToken={''}
          {...viewport}
          width="100%"
          height="100%"
          transitionDuration='200'
          mapStyle='mapbox://styles/jogroh/clskulrby03th01p17zsydqhn'
          style={{borderRadius: 20}}
          ></ReactMapGl>
        </div>
      );
}
