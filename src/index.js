function displayLocalTime() {
  let local = document.querySelector("#local-time");
  let time = moment().tz(moment.tz.guess()).format(`LLLL`);
  local.innerHTML = time;
}
displayLocalTime();
setInterval(displayLocalTime, 1000);

function presets() {
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
presets();
setInterval(presets, 1000);
