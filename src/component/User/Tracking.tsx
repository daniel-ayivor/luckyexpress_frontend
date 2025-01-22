import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ShipmentTracking: React.FC = () => {
  const [trackingCode, setTrackingCode] = useState("");  // To store user input
  const [shipmentDetails, setShipmentDetails] = useState<any>(null);  // To store the shipment details fetched from Firestore
  const [error, setError] = useState<string>("");  // To handle errors

  const handleTrackingCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingCode(e.target.value);
  };

  const handleTrackShipment = async () => {
    try {
      // Clear previous shipment details
      setShipmentDetails(null);
      setError("");

      // Fetch the document from Firestore using the tracking code as the document ID
      const shipmentRef = doc(db, "shipments", trackingCode);
      const shipmentDoc = await getDoc(shipmentRef);

      if (shipmentDoc.exists()) {
        // Set the shipment details if the document exists
        setShipmentDetails(shipmentDoc.data());
      } else {
        // Show an error if the tracking code does not exist
        setError("Shipment not found with this tracking code.");
      }
    } catch (error) {
      console.error("Error retrieving shipment:", error);
      setError("Failed to retrieve shipment details.");
    }
  };

  return (
    <div>
      <h2>Track Your Shipment</h2>
      <div>
        <label htmlFor="trackingCode">Enter Tracking Code:</label>
        <input
          type="text"
          id="trackingCode"
          value={trackingCode}
          onChange={handleTrackingCodeChange}
          placeholder="Enter your tracking code"
        />
        <button onClick={handleTrackShipment}>Track Shipment</button>
      </div>

      {/* Show error message if there's an issue */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display shipment details if available */}
      {shipmentDetails && (
        <div>
          <h3>Shipment Details:</h3>
          <p><strong>Package Name:</strong> {shipmentDetails.packageDetails.packageName}</p>
          <p><strong>Package Type:</strong> {shipmentDetails.packageDetails.packageTypes}</p>
          <p><strong>Weight:</strong> {shipmentDetails.packageDetails.weight} kg</p>
          <p><strong>Dimensions:</strong> {shipmentDetails.packageDetails.dimensions.length} x {shipmentDetails.packageDetails.dimensions.width} x {shipmentDetails.packageDetails.dimensions.height} cm</p>
          <p><strong>Shipment Status:</strong> {shipmentDetails.packageDetails.shipmentStatus}</p>
          <p><strong>Created At:</strong> {shipmentDetails.timestamps.createdAt}</p>
          <p><strong>Last Updated:</strong> {shipmentDetails.timestamps.updatedAt}</p>
        </div>
      )}
    </div>
  );
};

export default ShipmentTracking;
