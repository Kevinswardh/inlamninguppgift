// CityDisplay.js
import { useEffect, useState } from "react";
import { useLocation } from "../5-Contexts/LocationContext"; // Adjust the path accordingly

const CityDisplay = () => {
  const { lat, lng } = useLocation();
  const [city, setCity] = useState("");

  // Debugging: Log the lat and lng
  console.log("Latitude:", lat, "Longitude:", lng);

  useEffect(() => {
    const fetchCity = async () => {
      if (lat && lng) {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBbN22s97A2DvD44ufNrIdGyf_Fv2N52Rs`
          );
          const data = await response.json();

          if (data.results.length > 0) {
            // Iterate through results to find the city
            let city = "Unknown City";
            for (const result of data.results) {
              const addressComponents = result.address_components;
              const cityComponent = addressComponents.find((component) =>
                component.types.includes("locality")
              );
              if (cityComponent) {
                city = cityComponent.long_name;
                break; // Exit loop once city is found
              }
            }
            setCity(city);
          } else {
            setCity("Unknown City");
          }
        } catch (error) {
          console.error("Error fetching city name:", error);
          setCity("Error fetching city");
        }
      }
    };

    fetchCity();
  }, [lat, lng]);

  return (
    <div style={styles.cityDisplay}>
      <span>{city || "Loading..."}</span>
    </div>
  );
};

const styles = {
  cityDisplay: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#0b0f19",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    zIndex: "1000",
  },
};

export default CityDisplay;
