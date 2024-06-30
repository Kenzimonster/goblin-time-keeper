function displayLocalTime() {
  let local = document.querySelector("#local-time");
  let time = moment().tz(moment.tz.guess()).format(`LLLL`);
  local.innerHTML = time;
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
    selectedCity.innerHTML = null;
  }
  //Paris
  let parisData = document.querySelector("#paris");
  let parisDate = parisData.querySelector(".date");
  let parisTime = parisData.querySelector(".hourMin");
  let parisSec = parisData.querySelector(".seconds");
  let parisMoment = moment().tz("Europe/Paris");
  parisDate.innerHTML = parisMoment.format("ddd, MMMM Do, YYYY");
  parisTime.innerHTML = parisMoment.format("h:mm");
  parisSec.innerHTML = parisMoment.format(":ss A");
  //Tokyo
  let tokyoData = document.querySelector("#tokyo");
  let tokyoDate = tokyoData.querySelector(".date");
  let tokyoTime = tokyoData.querySelector(".hourMin");
  let tokyoSec = tokyoData.querySelector(".seconds");
  let tokyoMoment = moment().tz("Asia/Tokyo");
  tokyoDate.innerHTML = tokyoMoment.format("ddd, MMMM Do, YYYY");
  tokyoTime.innerHTML = tokyoMoment.format("h:mm");
  tokyoSec.innerHTML = tokyoMoment.format(":ss A");
  //Honolulu
  let hawaiiData = document.querySelector("#hawaii");
  let hawaiiDate = hawaiiData.querySelector(".date");
  let hawaiiTime = hawaiiData.querySelector(".hourMin");
  let hawaiiSec = hawaiiData.querySelector(".seconds");
  let hawaiiMoment = moment().tz("Pacific/Honolulu");
  hawaiiDate.innerHTML = hawaiiMoment.format("ddd, MMMM Do, YYYY");
  hawaiiTime.innerHTML = hawaiiMoment.format("h:mm");
  hawaiiSec.innerHTML = hawaiiMoment.format(":ss A");
}

function citySeletor(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let selectedCity = document.querySelector("#selectedCity");
  selectedCity.innerHTML = `<div>
          <div class ="cityName">${cityName}</div>
          <div class ="date">${cityTime.format("ddd, MMMM Do, YYYY")}</div>
        </div>
        <div class ="cityTime">
          <span class ="hourMin">${cityTime.format(
            "h:mm"
          )}</span><span class="seconds">${cityTime.format(":ss A")}</span>
        </div>`;
}
let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", citySeletor);
displayLocalTime();
setInterval(displayLocalTime, 1000);
presets();
setInterval(presets, 1000);
