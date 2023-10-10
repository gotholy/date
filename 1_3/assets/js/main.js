const currentDate = new Date();
const currentDateOutput = document.querySelector(".currentDate");
const newDateOutput = document.querySelector(".newDate");
const newDate1Output = document.querySelector(".newDate2");
const newDate3Output = document.querySelector(".newDate3");
const lastDateOutput = document.querySelector(".lastDate");

const lastDate = new Date(currentDate);
lastDate.setDate(currentDate.getDate() + 30);
const setNewDate = new Date();
setNewDate.setFullYear(2123);
setNewDate.setDate(24);
setNewDate.setMonth(1);
const setNewDate2 = new Date();
setNewDate2.setFullYear(2123);
setNewDate2.setDate(24);
setNewDate2.setMonth(2);
const setNewDate3 = new Date();
setNewDate3.setFullYear(2123);
setNewDate3.setDate(3);
setNewDate3.setMonth(2);

document.querySelector(".currentDate").textContent = currentDate;
document.querySelector(".newDate").textContent = setNewDate;
document.querySelector(".newDate2").textContent = setNewDate2;
document.querySelector(".newDate3").textContent = setNewDate3;
document.querySelector(".lastDate").textContent = lastDate;
