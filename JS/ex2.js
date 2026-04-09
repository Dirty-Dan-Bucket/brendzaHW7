document.getElementById("searchBtn").addEventListener("click", () => {
  const login = document.getElementById("login").value.trim();
  const avatarParagraph = document.getElementById("avatar");
  const table = document.getElementById("userinfo");

  // Clear previous results
  avatarParagraph.innerHTML = "";
  // Remove old table rows except header
  table.querySelectorAll("tr:not(:first-child)").forEach(row => row.remove());

  if (login === "") {
    console.error("No login entered.");
    return;
  }

  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(user => {
      // Profile picture
      const img = document.createElement("img");
      img.src = user.avatar_url;
      img.width = 150;
      avatarParagraph.appendChild(img);

      // Table row
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.textContent = user.name || "(no name listed)";
      const blogCell = document.createElement("td");
      blogCell.textContent = user.blog || "(none)";
      const createdCell = document.createElement("td");
      createdCell.textContent = new Date(user.created_at).toLocaleDateString();
      row.appendChild(nameCell);
      row.appendChild(blogCell);
      row.appendChild(createdCell);
      table.appendChild(row);
      })
      .catch(error => console.error("Error fetching GitHub user:", error));
    });