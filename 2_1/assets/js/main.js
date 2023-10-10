function showDate() {
  let heute = new Date();

  let tag = heute.getDate();
  let monat = heute.getMonth() + 1;
  let jahr = heute.getFullYear();

  if (tag < 10) {
    tag = "0" + tag;
  }
  if (monat < 10) {
    monat = "0" + monat;
  }

  let dateFormated = tag + "/" + monat + "/" + jahr;

  document.querySelector(".dateOutput").textContent = dateFormated;
}

showDate();
