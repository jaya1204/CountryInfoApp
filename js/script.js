const inputText = document.getElementById("input-text");
const searchButton = document.getElementById("search-btn");
const infoContainer = document.createElement("div");
infoContainer.classList.add("info-container");

countryInfo();

function countryInfo() {
  fetch(`https://restcountries.com/v2/all`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((country) => {
        const countryName = country.name;
        const flag = country.flag;
        const capital = country.capital;
        const region = country.region;
        const language = country.languages[0].name;
        const population = country.population;

        countryDetails(
          countryName,
          flag,
          population,
          language,
          capital,
          region
        );
      });
      console.log(data);
    })
    .catch((error) => {
      console.log("Error fetching country data:", error);
    });
}

function countryDetails(name, flag, people, languages, capital, region) {
  const container = document.getElementById("container");

  const flagContainer = document.createElement("div");
  flagContainer.classList.add("flagcontainer");

  const flagImg = document.createElement("img");
  flagImg.src = flag;
  flagImg.classList.add("flag-img");

  const countryName = document.createElement("h3");
  countryName.textContent = name;
  countryName.classList.add("country-name");

  const createLabelWithValue = (labelText, valueText) => {
    const container = document.createElement("div");
    container.classList.add("title");

    const label = document.createElement("span");
    label.classList.add("label");
    label.textContent = labelText;

    const value = document.createElement("span");
    value.textContent = valueText;

    container.append(label, value);
    return container;
  };

  const capitalCity = createLabelWithValue("Capitalcity:", capital);
  const countryRegion = createLabelWithValue("Region:", region);
  const population = createLabelWithValue("Population:", people);
  /* const countryLanguage = createLabelWithValue("Language:", languages);*/

  const readMore = document.createElement("button");
  readMore.textContent = "Read more";
  readMore.classList.add("readmore-btn");
  readMore.addEventListener("click", () => {
    location.href = `../countryinfo.html?name= ${name}`;
    console.log("clicked");
    country(name);
  });

  flagContainer.append(
    flagImg,
    countryName,
    capitalCity,
    population,
    countryRegion,

    /* countryLanguage,*/
    readMore
  );

  infoContainer.appendChild(flagContainer);
  container.append(infoContainer);
}
