let earth = {
   worlds: [
      {continent: "Africa", countries: ["Nigeria", "Ghana", "Togo", "Egypt"]},
      {continent: "Europe", countries: ["Britain", "France", "Germany", "Italy"]},
      {continent: "Asia", countries: ["Korea", "Japan", "China", "Turkey"]},
      {continent: "North America", countries: ["United States", "Canada", "Denmark", "Mexico"]}
   ]
};

let planet = "<ul>";

for(const world of earth.worlds) {
   console.log(world.continent)
   planet += ` <li> <h2>${world.continent}</h2> <ul>`;
   for(const country of world.countries) {
      // console.log(country)
      planet += `<li>${country}</li>`;
   }
   planet += `</ul></li>`;
}
planet += `</ul>`;

// document.querySelector(".demo").innerHTML = planet;

// console.log(planet)



const students = [
   {fname: "Kareen", lname: "Nwokolo", password: "12hgg3536JJjj@"},
   {fname: "Avoid", lname: "Odo", password: "12hgg3536JJjj@"},
   {fname: "Cornelius", lname: "Asogwa", password: "12hgg3536JJjj@"},
   {fname: "Chinyere", lname: "Ugwu", password: "12hgg3536JJjj@"},
   {fname: "Collins", lname: "Eze", password: "12hgg3536JJjj@"},
   {fname: "Thadeus", lname: "Agbo", password: "12hgg3536JJjj@"}
];


function createTable() {
   const tBody = document.querySelector("#tabel-el tbody");
   
   students.forEach(function(student) {
      // create rows for each student
      const row = document.createElement("tr");
      // create individual cells
      const fnameCell = document.createElement("td");
      fnameCell.textContent = student.fname;
      row.appendChild(fnameCell);
      
      const lnameCell = document.createElement("td");
      lnameCell.textContent = student.lname;
      row.appendChild(lnameCell);
      
      const passwordCell = document.createElement("td");
      passwordCell.textContent = student.password;
      row.appendChild(passwordCell);
      
      tBody.appendChild(row);
   });
}
createTable();



const tableHeaders = ["FIRST NAME", "LAST NAME", "PASSWORD"];

function pureTable() {
   const tableEl = document.querySelector("#tableEl");
   const table = document.createElement("table");
   const row = document.createElement("tr");
   
   tableHeaders.forEach(function(tableHeader) {
      const th = document.createElement("th");
      th.textContent = tableHeader;
      row.appendChild(th);

      table.appendChild(row);
   });
   
   students.forEach(function(student) {
      const row = document.createElement("tr");
      const fnCell = document.createElement("td");
      fnCell.textContent = student.fname;
      row.appendChild(fnCell);

      const lnCell = document.createElement("td");
      lnCell.textContent = student.lname;
      row.appendChild(lnCell);

      const pCell = document.createElement("td");
      pCell.textContent = student.password;
      row.appendChild(pCell);

      table.appendChild(row)

   });
   tableEl.appendChild(table)
}
pureTable();