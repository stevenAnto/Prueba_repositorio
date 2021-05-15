
import "./Programacion.css"
import React, { useState, useEffect } from "react";

import { useGoogleMaps } from "react-hook-google-maps";



const Programacion = () => {

  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyBwwziWSTx390Rttg21Yn-TGa3iCSh1DaE",
    // NOTE: even if you change options later
    {
      center: { lat: -12.04332382867714, lng: -76.95135393395664 },
      zoom: 11,
    }
  )

    return (
      
      <div className="mapa">
      <div>
        <h3>Te brindamos información para que puedas conocer y controlar la ejecución de la obra pública.</h3>
      <h4>
        Mapa de Inversiones actualmente se encuentra en proceso de construcción e irá incorporando la totalidad de obras del país de forma gradual e incremental. Los datos y las funcionalidades de la plataforma irán evolucionando a través de la participación de la ciudadanía, y en función de las necesidades operativas que surjan..
        </h4></div>
      
      <div
        className="mapa__maps"

        ref={ref}
        style={{ width: 1000, height: 500 }}
        
      />
      
    </div>
    );
}

export default Programacion
