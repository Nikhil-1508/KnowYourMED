import axios from "axios";
import { useState } from "react";
import "./medicineInfo.css";

function MedicineInfo() {
  const [medicineName, setMedicineName] = useState(""); // Controlled input field
  const [searchQuery, setSearchQuery] = useState(""); // Search query triggered on submit
  const [medicineResults, setMedicineResults] = useState([]); // Array to store search results
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
    if (!text) return "No information avaailable.";
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
    setSearchQuery(medicineName); // Update search query on submit
    fetchMedicineDetails(medicineName);
  };

  const fetchMedicineDetails = async (query) => {
    try {
      // Fetch medicine details from backend API
      const response = await axios.get(`http://localhost:3000/medicine/${query}`);
      console.log(response.data?.medicine);

      // Append new medicine details to the existing array
      setMedicineResults((prevResults) => [
        ...prevResults,
        { name: query, details: response.data },
      ]);
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
    <div className="MedInfo">
      <h1>Medicine Information Search</h1>

      {/* Input card */}
      <div className="input-card">
        <input
          type="text"
          placeholder="Enter medicine name (e.g., Paracetamol)"
          value={medicineName}
          onChange={handleInputChange}
        />
        <div>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display latest searched medicine details */}
      {medicineResults.length > 0 && (
        <div className="medicine-card">
          <h2>
            Details for{" "}
            {medicineResults[medicineResults.length - 1].name.charAt(0).toUpperCase() +
              medicineResults[medicineResults.length - 1].name.slice(1)}
          </h2>
          <p>
            <strong>Dosage Form:</strong>{" "}
            {sliceText(medicineResults[medicineResults.length - 1].details.dosage)}
          </p>
          <p>
            <strong>Age Group:</strong>{" "}
            {sliceText(medicineResults[medicineResults.length - 1].details.ageGroup)}
          </p>
          <p>
            <strong>Side Effects:</strong>{" "}
            {sliceText(medicineResults[medicineResults.length - 1].details.sideEffects)}
          </p>
          <p>
            <strong>Purpose:</strong>{" "}
            {sliceText(medicineResults[medicineResults.length - 1].details.medicine?.purpose)}
          </p>
          <p>
            <strong>Warnings:</strong>{" "}
            {sliceText(medicineResults[medicineResults.length - 1].details.warnings)}
          </p>
          <p>
            <strong>Overdosage:</strong>{" "}
            {sliceText(medicineResults[medicineResults.length - 1].details.overdosage)}
          </p>
          <p>
            <strong>Adverse Actions:</strong>{" "}
            {sliceText(medicineResults[medicineResults.length - 1].details.adverseActions)}
          </p>
          <p>
            <strong>General Precautions:</strong>{" "}
            {sliceText(medicineResults[medicineResults.length - 1].details.generalPrecautions)}
          </p>
        </div>
      )}
    </div>
  );
}

export default MedicineInfo;
