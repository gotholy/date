function uhr() {
  let dateTime = new Date();
  let stunde = dateTime.getHours();
  let minute = dateTime.getMinutes();
  let sekunde = dateTime.getSeconds();
  let ampm = document.querySelector(".ampm");
  //   console.log(stunde);
  //   console.log(minute);
  //   console.log(sekunde);
  if (stunde >= 12) {
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }
  if (stunde > 12) {
    stunde = stunde - 12;
  }
  document.querySelector(".std").innerHTML = stunde;
  document.querySelector(".min").innerHTML = minute;
  document.querySelector(".sek").innerHTML = sekunde;
}

setInterval(uhr, 10);
