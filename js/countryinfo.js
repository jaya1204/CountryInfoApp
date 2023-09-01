console.log(new URLSearchParams(window.location.search).get(`name`));

const countryname = new URLSearchParams(window.location.search).get(`name`);

fetch(`https://restcountries.com/v3.1/name/${countryname}`)
  .then((res) => res.json())
  .then(([country]) => {
    console.log(country);

    const flagsrc = country.flags.svg;
    const capital = country.capital;
    const name = countryname;
    const nativeName = Object.values(country.name.nativeName)[0].common;
    const population = country.population;
    const region = country.region;
    const subregion = country.subregion;
    const currencies = Object.values(country.currencies)
      .map((currency) => currency.name)
      .join(", ");
    const languages = Object.values(country.languages).join(", ");

    Country(
      flagsrc,
      name,
      capital,
      nativeName,
      region,
      subregion,
      currencies,
      languages,
      population
    );
  });

function Country(
  flagsrc,
  name,
  capital,
  nativename,
  region,
  subregion,
  currencies,
  languages,
  population
) {
  const countryContainer = document.getElementById("country-container");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img");

  const countryFlagImg = document.createElement("img");
  countryFlagImg.src = flagsrc;
  countryFlagImg.classList.add("countryflag-image");
  imgContainer.append(countryFlagImg);

  const countryInfo = document.createElement("div");
  countryInfo.classList.add("info");

  const nameElement = document.createElement("h1");
  nameElement.textContent = name;

  // Create a container for additional information
  const countryDetails = document.createElement("div");
  countryDetails.classList.add("country-details");

  const nativeName = document.createElement("p");
  nativeName.textContent = `Native Name: ${nativename}`;

  const capitalCity = document.createElement("p");
  capitalCity.textContent = `Capital: ${capital}`;

  const regionLabel = document.createElement("p");
  regionLabel.textContent = `Region: ${region}`;

  const subregionLabel = document.createElement("p");
  subregionLabel.textContent = `Subregion: ${subregion}`;

  const currenciesLabel = document.createElement("p");
  currenciesLabel.textContent = `Currencies: ${currencies}`;

  const languagesLabel = document.createElement("p");
  languagesLabel.textContent = `Languages: ${languages}`;

  const populationLabel = document.createElement("p");
  populationLabel.textContent = `Population: ${population}`;

  countryDetails.appendChild(nativeName);
  countryDetails.appendChild(capitalCity);
  countryDetails.appendChild(regionLabel);
  countryDetails.appendChild(subregionLabel);
  countryDetails.appendChild(currenciesLabel);
  countryDetails.appendChild(languagesLabel);
  countryDetails.appendChild(populationLabel);

  countryInfo.appendChild(nameElement);
  countryInfo.appendChild(countryDetails);

  countryContainer.append(imgContainer, countryInfo);
}

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
