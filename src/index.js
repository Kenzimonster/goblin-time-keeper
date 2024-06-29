function displayLocalTime() {
  let local = document.querySelector("#local-time");
  let time = moment().tz(moment.tz.guess()).format(`LLLL`);
  local.innerHTML = time;
}
displayLocalTime();
