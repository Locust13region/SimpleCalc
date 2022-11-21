let screen = document.getElementById("screen");
screen.innerHTML = "0";
let result = 0;
let firstArgument = undefined;
let secondArgument = undefined;
let action = "";

document.getElementById("C").onclick = cleanScreen;
document.getElementById("CE").onclick = cleanAction;
document.getElementById("BSPC").onclick = onClickBackspace;
document.getElementById("/").onclick = onClickAction;
document.getElementById("1").onclick = onClickNumber;
document.getElementById("2").onclick = onClickNumber;
document.getElementById("3").onclick = onClickNumber;
document.getElementById("*").onclick = onClickAction;
document.getElementById("4").onclick = onClickNumber;
document.getElementById("5").onclick = onClickNumber;
document.getElementById("6").onclick = onClickNumber;
document.getElementById("-").onclick = onClickAction;
document.getElementById("7").onclick = onClickNumber;
document.getElementById("8").onclick = onClickNumber;
document.getElementById("9").onclick = onClickNumber;
document.getElementById("+").onclick = onClickAction;
document.getElementById("+/-").onclick = onClickModule;
document.getElementById("0").onclick = onClickNumber;
document.getElementById(".").onclick = onClickDot;
document.getElementById("=").onclick = onClickAction;

function cleanScreen() {
  screen.innerHTML = "0";
  result = 0;
  firstArgument = undefined;
  secondArgument = undefined;
  action = "";
}
function onClickNumber(e) {
  //   console.log(e.target.innerHTML);
  //   console.log(screen.innerText);
  if (
    screen.innerText == 0 ||
    screen.innerText == "0" ||
    firstArgument == undefined
  ) {
    screen.innerText = "";
    firstArgument = undefined;
  }
  if (action == "") {
    if (!firstArgument) {
      firstArgument = e.target.innerHTML;
      screen.innerHTML = firstArgument;
    } else {
      firstArgument += e.target.innerHTML;
      screen.innerHTML = firstArgument;
    }
  } else {
    if (!secondArgument) {
      secondArgument = e.target.innerHTML;
      screen.innerHTML = secondArgument;
    } else {
      secondArgument += e.target.innerHTML;
      screen.innerHTML = secondArgument;
    }
  }
}
function onClickAction(e) {
  if (firstArgument == undefined) {
    screen.innerHTML = 0;
    return;
  }
  if (!action) {
    if (e.target.innerHTML == "=") {
      action = "";
    } else {
      action = e.target.innerHTML;
      screen.innerHTML = firstArgument + e.target.innerHTML;
    }
  }
  if (secondArgument != undefined) {
    switch (action) {
      case "+":
        firstArgument = Number(firstArgument) + Number(secondArgument);
        break;
      case "-":
        firstArgument = Number(firstArgument) - Number(secondArgument);
        break;
      case "*":
        firstArgument = Number(firstArgument) * Number(secondArgument);
        break;
      case "/":
        firstArgument = Number(firstArgument) / Number(secondArgument);
        break;
    }
    screen.innerHTML = firstArgument;
    secondArgument = undefined;
    if (e.target.innerHTML == "=") {
      action = "";
      firstArgument = undefined;
    }else{
		action = e.target.innerHTML;
		screen.innerHTML = firstArgument + e.target.innerHTML;
	}
  }
}
function onClickBackspace() {
	if (screen.innerText == firstArgument && action == '') {
	  if (firstArgument.length - 1 == 0) {
		firstArgument = 0;
		screen.innerText = "0";
	  } else {
		firstArgument = firstArgument.slice(0, firstArgument.length - 1);
		screen.innerHTML = firstArgument;
	  }
	}
	if (screen.innerText == secondArgument) {
	  if (secondArgument.length - 1 == 0) {
		secondArgument = 0;
		screen.innerText = "0";
	  } else {
		secondArgument = secondArgument.slice(0, secondArgument.length - 1);
		screen.innerHTML = secondArgument;
	  }
	}
	if (firstArgument == undefined) {
	  screen.innerHTML = "0";
	}
  }
  
function onClickModule() {}
function onClickDot() {}
function cleanAction() {}
