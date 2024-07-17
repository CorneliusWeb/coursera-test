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
      console.log(country)
      planet += `<li>${country}</li>`;
   }
   planet += `</ul></li>`;
}
planet += `</ul>`;

//document.querySelector(".demo").innerHTML = planet;

console.log(planet)