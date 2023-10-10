function KnechtenOderNicht(datum) {
  const jahr = datum.getFullYear();
  const monat = datum.getMonth() + 1;
  const tag = datum.getDate();

  const wochentag = datum.getDay();

  if (wochentag === 0 || wochentag === 6) {
    return "Wochenende";
  } else {
    return "Arbeitstag";
  }
}

const datum1 = new Date("12.15.2019");
const datum2 = new Date("2.16.2001");
const datum3 = new Date("2.1.2020");
const datum4 = new Date("2.29.2020");

console.log(KnechtenOderNicht(datum1));
console.log(KnechtenOderNicht(datum2));
console.log(KnechtenOderNicht(datum3));
console.log(KnechtenOderNicht(datum4));
