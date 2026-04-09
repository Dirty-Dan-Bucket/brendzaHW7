const table = document.getElementById("paintings");

fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => response.json())
  .then(paintings => {
    paintings.forEach(painting => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = painting.name;

      const yearCell = document.createElement("td");
      yearCell.textContent = painting.year;

      const artistCell = document.createElement("td");
      artistCell.textContent = painting.artist;

      row.appendChild(nameCell);
      row.appendChild(yearCell);
      row.appendChild(artistCell);
      table.appendChild(row);
    });
  })
  .catch(error => console.error("Error loading paintings:", error));

