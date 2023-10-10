const outputDate = document.querySelector(".outputDatum");
let date = new Date();
let weekday = date.toLocaleString("default", { weekday: "long" });
let month = date.toLocaleString("default", { month: "long" });
outputDate.innerHTML =
  date +
  "</br>" +
  "</br>" +
  date.getFullYear() +
  "</br>" +
  "</br>" +
  date.getMonth() +
  " Monat" +
  "</br>" +
  "</br>" +
  date.getDate() +
  " Tag" +
  "</br>" +
  "</br>" +
  date.getMinutes() +
  " Minute" +
  "</br>" +
  "</br>" +
  weekday +
  "</br>" +
  "</br>" +
  month;
