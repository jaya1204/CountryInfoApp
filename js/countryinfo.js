console.log(new URLSearchParams(window.location.search).get(`name`));

const countryname = new URLSearchParams(window.location.search).get(`name`);

fetch(`https://restcountries.com/v3.1/name/${countryname}`)
  .then((res) => res.json())
  .then((country) => {
    console.log(country);
  });
/*const inputText = document.getElementById("input-text");
const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", () => {
  const conname = inputText.value;
   location.href = `/countryinfo.html?name= ${conname}`;
  inputText.value = "";
  console.log(conname);
  country(conname);
});

function country(conname) {
  fetch(`https://restcountries.com/v3.1/name/${conname}`)
    .then((res) => res.json())
    .then(([country]) => {
      console.log(country);

      const name = country.name.common;
      const population = country.population;
      const region = country.region;
      const subregion = country.subregion;
      const capital = country.capital?.[0] || "Unknown";
      const currencies = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ");
      const nativeName = Object.values(country.name.nativeName)[0].common;
      const languages = Object.values(country.languages).join(", ");
      console.log(name);
      console.log(population);
      console.log(region);
      console.log(subregion);
      console.log(capital);
      console.log(nativeName);
      console.log(currencies);
      console.log(languages);
    })
    .catch((error) => {
      console.log("Error fetching country data:", error);
    });
}
*/
