import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const LocationContext = createContext();

export const LocationProvider = ({ children, lat, lng }) => {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
    name: "Unknown Location",
  });

  useEffect(() => {
    const API_KEY = "AIzaSyBbN22s97A2DvD44ufNrIdGyf_Fv2N52Rs"; // Use your API key here

    const fetchLocationName = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.results && data.results[0]) {
          const locationName = data.results[0].formatted_address;
          setLocation({ lat: latitude, lng: longitude, name: locationName });
        } else {
          setLocation({
            lat: latitude,
            lng: longitude,
            name: "Unknown Location",
          });
        }
      } catch (error) {
        console.error("Error fetching location name:", error);
        setLocation({
          lat: latitude,
          lng: longitude,
          name: "Unknown Location",
        });
      }
    };

    if (lat !== undefined && lng !== undefined) {
      setLocation((prev) => ({ ...prev, lat, lng }));
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchLocationName(latitude, longitude);
      });
    }
  }, [lat, lng]);

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export const useLocation = () => useContext(LocationContext);
