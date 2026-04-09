// Build the data object to send
const travelData = {
  name: "Dan",
  countries: [
    { name: "Japan", year: 2023 },
    { name: "Canada", year: 2021 },
    { name: "France", year: 2022 }
  ]
};

// Send the data to the server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travelData)
})
  .then(response => response.json())
  .then(result => {
    console.log("Server confirmation:", result.message);
  })
  .catch(error => {
    console.error("Error sending travel data:", error);
  });