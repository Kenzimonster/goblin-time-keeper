function displayCaveTime() {
  let cave = document.querySelector("#cave-time");
  let time = moment().tz("Australia/Sydney").format(`LLLL`);
  cave.innerHTML = time;
}

function presets() {
  if (citySelectElement.value) {
    let cityTimeZone = citySelectElement.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let currentData = document.querySelector("#selectedCity");
    let currentDate = currentData.querySelector(".date");
    let currentTime = currentData.querySelector(".hourMin");
    let currentSec = currentData.querySelector(".seconds");
    let currentMoment = moment().tz(cityTimeZone);
    currentDate.innerHTML = currentMoment.format("ddd, MMMM Do, YYYY");
    currentTime.innerHTML = currentMoment.format("h:mm");
    currentSec.innerHTML = currentMoment.format(":ss A");
  } else {
    let selectedCity = document.querySelector("#selectedCity");
    let returnLink = document.querySelector("#reset");
    selectedCity.innerHTML = null;
    returnLink.innerHTML = null;
  }
  //Paris
  let parisData = document.querySelector("#paris");
  let parisDate = parisData.querySelector(".date");
  let parisTime = parisData.querySelector(".hourMin");
  let parisSec = parisData.querySelector(".seconds");
  let parisMoment = moment().tz("America/Winnipeg");
  parisDate.innerHTML = parisMoment.format("ddd, MMMM Do, YYYY");
  parisTime.innerHTML = parisMoment.format("h:mm");
  parisSec.innerHTML = parisMoment.format(":ss A");
  //Tokyo
  let amsterdamData = document.querySelector("#amsterdam");
  let amsterdamDate = amsterdamData.querySelector(".date");
  let amsterdamTime = amsterdamData.querySelector(".hourMin");
  let amsterdamSec = amsterdamData.querySelector(".seconds");
  let amsterdamMoment = moment().tz("Europe/Amsterdam");
  amsterdamDate.innerHTML = amsterdamMoment.format("ddd, MMMM Do, YYYY");
  amsterdamTime.innerHTML = amsterdamMoment.format("h:mm");
  amsterdamSec.innerHTML = amsterdamMoment.format(":ss A");
  //Honolulu
  let brisbaneData = document.querySelector("#brisbane");
  let brisbaneDate = brisbaneData.querySelector(".date");
  let brisbaneTime = brisbaneData.querySelector(".hourMin");
  let brisbaneSec = brisbaneData.querySelector(".seconds");
  let brisbaneMoment = moment().tz("Australia/Brisbane");
  brisbaneDate.innerHTML = brisbaneMoment.format("ddd, MMMM Do, YYYY");
  brisbaneTime.innerHTML = brisbaneMoment.format("h:mm");
  brisbaneSec.innerHTML = brisbaneMoment.format(":ss A");
}

function citySeletor(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let selectedCity = document.querySelector("#selectedCity");
  let returnLink = document.querySelector("#reset");
  selectedCity.innerHTML = `<div>
          <div class ="cityName">${cityName}</div>
          <div class ="date">${cityTime.format("ddd, MMMM Do, YYYY")}</div>
        </div>
        <div class ="cityTime">
          <span class ="hourMin">${cityTime.format(
            "h:mm"
          )}</span><span class="seconds">${cityTime.format(":ss A")}</span>
        </div>`;
  returnLink.innerHTML = `<a href="/">Clear Selected City🔙</a>`;
}
let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", citySeletor);
displayCaveTime();
setInterval(displayCaveTime, 1000);
presets();
setInterval(presets, 1000);
