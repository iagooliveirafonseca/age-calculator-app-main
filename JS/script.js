const allInputs = document.querySelectorAll("input");
const allSpans = document.querySelectorAll("span");
const allDates = document.querySelectorAll(".time");
const paragraphTime = document.querySelectorAll(".takeParagrafhTime")
const getDate = new Date()
const dayNow = getDate.getDate()
const monthNow = getDate.getMonth()
const yearNow = getDate.getFullYear()

console.log(dayNow)
console.log(monthNow)
console.log(yearNow)

function empty(index) {
  allSpans[index].style.display = "block";
}

function notEmpty(index) {
  allSpans[index].style.display = "";
}

function ageValid(index) {
  if (allInputs[index].value > 31 || allInputs[index].value <= 0) {
    allSpans[index].style.display = "block";
    allSpans[index].textContent = `Must be a valid ${paragraphTime[index].textContent}`;
  } else {
    allSpans[index].style.display = "";
    allSpans[index].textContent = "This Field is required" ;


  }
}

function validDate() {
  if (allInputs[0].value == "") {
    empty(0);
  } else {
    notEmpty(0);
    allDates[2].textContent = `${allInputs[0].value - dayNow}`;
    ageValid(0);
  }
}

function validMonth() {
  if (allInputs[1].value == "") {
    empty(1);
  } else {
    notEmpty(1);
    allDates[1].textContent = `${12 - allInputs[1].value}`;
        ageValid(1);
  }
}

function validYear() {
  if (allInputs[2].value == "") {
    empty(2);
  } else {
    notEmpty(2);
    allDates[0].textContent = `${yearNow - allInputs[2].value }`;
        ageValid(2);
  }
}
