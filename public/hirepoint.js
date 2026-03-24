// theme switcher
const themeSelect = document.getElementById("theme-select");

themeSelect.addEventListener("change", () => {
  if (themeSelect.value === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
});

// show information after click on button
async  function showPage(page) {
  const main = document.getElementById("main_alue");

  if (page === "company") {
    main.innerHTML = `
    <br>
    <img src="images/image1.jpg" width="500" height="300">  
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br>
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br>
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br>
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <br>
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    `;
  } else if (page === "contacts") {
    main.innerHTML = `
     <br>
     <img src="images/image2.jpg" width="500" height="300"> 
      <p>
        You can reach us at:<br>
        Email: info@hirepoint.com<br>
        Phone: +1 (123) 456-7890<br>
        Address: 123 Main Street, City, Country
      </p>
    `;
  } else if (page === "consultants") 
    {const response = await fetch("/consultants.json");  // request to get the JSON file from the server
    const data = await response.json();      // receive the JSON data 

    let html = "<p>Our team of experienced consultants can help you with:<br>Resume writing and optimization, Interview preparation,<br>Career guidance and planning,Job search strategies,<br>Networking opportunities</p>";
    html += "<table border='1'>";
    html += "<tr><th>Name</th><th>Schedule</th><th>Contacts</th></tr>";

    data.forEach(person => {
      html += `
        <tr>
          <td>${person.Name}</td>
          <td>${person.Schedule}</td>
          <td>${person.Contacts}</td>
        </tr>
      `;
    });

    html += "</table>";
    main.innerHTML = html;
  }
  
}