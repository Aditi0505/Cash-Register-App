var btnCheck = document.querySelector("#btn-check");

var billInput = document.querySelector("#bill-amt");

var cashInput = document.querySelector("#cash-amt");

var output = document.querySelector("#output");

var numNotes = document.querySelectorAll(".noOfNotes");

var notes = [2000, 500, 100, 20, 10, 5, 1];
btnCheck.addEventListener("click", clickHandler);

function clickHandler() {
  if (billInput.value === "" || cashInput.value === "") {
    output.innerText = "Please enter valid values";
  } else {
    if (billInput.value < 0) {
      output.innerText = "Please make sure bill is greater than 0";
    } else {
      if (Number(cashInput.value) < Number(billInput.value)) {
        output.innerText = "Please make sure cash is greater than bill";
      } else if (Number(cashInput.value) === Number(billInput.value)) {
        output.innerText = "No amount to be returned";
      } else {
        var remainingBalance = cashInput.value - billInput.value;
        for (var i = 0; i < notes.length; i++) {
          var returnNote = Math.floor(remainingBalance / notes[i]);
          remainingBalance = remainingBalance % notes[i];
          numNotes[i].innerText = returnNote;
        }
      }
    }
  }
}
