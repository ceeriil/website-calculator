function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getAnswer() {
  return document.getElementById("answer-value").innerText;
}

function printAnswer(num) {
  if (num == "") {
    document.getElementById("answer-value").innerText = num;
  } else {
    document.getElementById("answer-value").innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

alert(reverseNumberFormat(getAnswer()));

const operators = document.getElementsByClassName("operator");

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printAnswer("");
    } else if (this.id == "backspace") {
      let answer = reverseNumberFormat(getAnswer()).toString();
      if (answer) {
        answer = answer.substr(0, answer.length - 1);
        printAnswer(answer);
      }
    } else {
      let answer = getAnswer();
      const history = getHistory();
      if (answer != "") {
        answer = reverseNumberFormat(answer);
      }
    }
  });
}

const number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let answer = reverseNumberFormat(getAnswer());
    if (answer != NaN) {
      answer = answer + this.id;
      printAnswer(answer);
    }
  });
}
