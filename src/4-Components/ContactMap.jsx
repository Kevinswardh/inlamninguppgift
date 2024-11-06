import { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import PropTypes from "prop-types";

const ContactMap = ({ location }) => {
  const { lat, lng, name } = location;

  const mapContainerStyle = {
    height: "400px",
    width: "70%",
  };

  const [center, setCenter] = useState({ lat, lng });

  useEffect(() => {
    // Update the map center when the location prop changes
    setCenter({ lat, lng });
  }, [lat, lng]);

  return (
    <div className="map-column">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={{ lat, lng }} title={name} />
      </GoogleMap>
      <div style={{ padding: "50px" }} className="info-column">
        <div className="info-wrapper">
          <h2 className="center-title">{name}</h2>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the component
ContactMap.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactMap;
