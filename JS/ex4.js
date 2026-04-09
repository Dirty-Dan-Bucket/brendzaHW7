document.getElementById("infoForm").addEventListener("submit", event => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const table = document.getElementById("results");

  // Clear old rows except header
  table.querySelectorAll("tr:not(:first-child)").forEach(row => row.remove());

  // Add each key/value pair to the table
  for (const [key, value] of formData.entries()) {
    const row = document.createElement("tr");
    const keyCell = document.createElement("td");
    keyCell.textContent = key;
    const valueCell = document.createElement("td");
    valueCell.textContent = value;
    row.appendChild(keyCell);
    row.appendChild(valueCell);
    table.appendChild(row);
  }
});