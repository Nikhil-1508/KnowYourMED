import axios from "axios";
import { useState } from "react";
import "./medicineInfo.css";

function MedicineInfo() {
  const [medicineName, setMedicineName] = useState(""); // Controlled input field
  const [medicineDetails, setMedicineDetails] = useState(null); // Store only the latest searched tablet
  const [error, setError] = useState(null);

  // Helper function to get the position of the nth occurrence of a character
  const getNthOccurrence = (str, char, n) => {
    let index = -1;
    for (let i = 0; i < n; i++) {
      index = str.indexOf(char, index + 1);
      if (index === -1) break; // If fewer than n occurrences
    }
    return index;
  };

  // Function to slice text till the 10th full stop
  const sliceText = (text) => {
    if (!text) return "No information available.";
    const index = getNthOccurrence(text, ".", 10);
    return index !== -1 ? text.slice(0, index + 1) : text; // Include the 10th full stop
  };

  const handleInputChange = (e) => {
    setMedicineName(e.target.value);
  };

  const handleSearch = () => {
    if (medicineName.trim() === "") {
      setError("Please enter a valid medicine name.");
      return;
    }
    fetchMedicineDetails(medicineName);
  };

  const fetchMedicineDetails = async (query) => {
    try {
      // Fetch medicine details from backend API
      const response = await axios.get(`http://localhost:3000/medicine/${query}`);
      console.log(response.data?.medicine);

      // Set the latest searched medicine details
      setMedicineDetails({ name: query, details: response.data });
      setError(null); // Clear error on success
    } catch (err) {
      // Handle errors (including 404 and 500)
      console.error("Error fetching medicine details:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred while fetching medicine details."
      );
    }
  };

  return (
    <div className="App">
      <h1>Medicine Information Search</h1>
      <input
        type="text"
        placeholder="Enter medicine name (e.g., Paracetamol)"
        value={medicineName}
        onChange={handleInputChange}
      />
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display only the latest searched medicine */}
      {medicineDetails && (
        <div className="medicine-card">
          <h2>
            Details for{" "}
            {medicineDetails.name.charAt(0).toUpperCase() + medicineDetails.name.slice(1)}
          </h2>
          <p>
            <strong>Dosage Form:</strong>{" "}
            {sliceText(medicineDetails.details.dosage)}
          </p>
          <p>
            <strong>Age Group:</strong>{" "}
            {sliceText(medicineDetails.details.ageGroup)}
          </p>
          <p>
            <strong>Side Effects:</strong>{" "}
            {sliceText(medicineDetails.details.sideEffects)}
          </p>
          <p>
            <strong>Purpose:</strong>{" "}
            {sliceText(medicineDetails.details.medicine?.purpose)}
          </p>
          <p>
            <strong>Warnings:</strong>{" "}
            {sliceText(medicineDetails.details.warnings)}
          </p>
          <p>
            <strong>Overdosage:</strong>{" "}
            {sliceText(medicineDetails.details.overdosage)}
          </p>
          <p>
            <strong>Adverse Actions:</strong>{" "}
            {sliceText(medicineDetails.details.adverseActions)}
          </p>
          <p>
            <strong>General Precautions:</strong>{" "}
            {sliceText(medicineDetails.details.generalPrecautions)}
          </p>
        </div>
      )}
    </div>
  );
}

export default MedicineInfo;
