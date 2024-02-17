const allInputs = document.querySelectorAll("input");
const allSpans = document.querySelectorAll("span");
const allDates = document.querySelectorAll(".time");
const paragraphTime = document.querySelectorAll(".takeParagrafhTime");
const getInformationOfDate = new Date();
const dayNow = getInformationOfDate.getDate();
const monthNow = getInformationOfDate.getMonth();
const yearNow = getInformationOfDate.getFullYear();

function calcularIdade() {
  var idade = yearNow - allInputs[2].value;
  var mes = (monthNow + 1) - allInputs[1].value ;
  var dia = allInputs[0].value - dayNow ;

  if (dia <= 0 && mes <= 0) {
    idade = idade;
    console.log(idade)
    console.log(mes)
    console.log(dia)
   
  } else {
    idade = idade - 1;
    mes += 12
    console.log(idade);
    console.log(mes)
    console.log(dia)
  
  }

  if(dia <=0){
    idade = idade
  } else{
    idade ++
    new Date(yearNow, monthNow, 0).getDate() + dia 
  
  }

}

function empty(index) {
  allSpans[index].style.display = "block";
}

function notEmpty(index) {
  allSpans[index].style.display = "";
}

function validDayAndMonth(index) {
  if (
    allInputs[index].value > 31 ||
    allInputs[index].value <= 0 ||
    allInputs[1].value > 12
  ) {
    allSpans[index].style.display = "block";
    allSpans[
      index
    ].textContent = `Must be a valid ${paragraphTime[index].textContent}`;
  } else {
    allSpans[index].style.display = "";
    allSpans[index].textContent = "This Field is required";
  }
}

function validDate() {
  if (allInputs[0].value == "") {
    empty(0);
  } else {
    notEmpty(0);
    allDates[2].textContent = `${allInputs[0].value}`;
    validDayAndMonth(0);
  }
}

function validMonth() {
  if (allInputs[1].value == "") {
    empty(1);
  } else {
    notEmpty(1);
    allDates[1].textContent = `${allInputs[1].value}`;
    validDayAndMonth(1);
  }
}

function checkBirthday() {
  if (allInputs[1] > monthNow) {
    console.log(yearNow);
  } else {
    return (yearNow = yearNow - 1);
  }
  return;
}

function validYear() {
  if (allInputs[2].value == "") {
    empty(2);
  } else {
    notEmpty(2);

    function validYear() {
      if (allInputs[2].value > yearNow || allInputs[2].value < 1875) {
        allSpans[2].style.display = "block";
        allSpans[2].textContent = `Must be a valid ${paragraphTime[2].textContent}`;
      } else {
        allSpans[2].style.display = "";
        allSpans[2].textContent = "This Field is required";
      }
    }
    validYear();
    allDates[0].textContent = `${yearNow - allInputs[2].value}`;
  }
}
