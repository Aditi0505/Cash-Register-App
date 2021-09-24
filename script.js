var btnCheck = document.querySelector("#btn-check");

var billInput = document.querySelector("#bill-amt");

var cashInput = document.querySelector("#cash-amt");

var numNotes = document.querySelectorAll(".noOfNotes");

var notes = [2000, 500, 100, 20, 10, 5, 1];
btnCheck.addEventListener("click", clickHandler);

function clickHandler() {
  if (billInput.value < 0) {
    alert("Please make sure bill is greater than 0");
  } else {
    if (Number(cashInput.value) < Number(billInput.value)) {
      alert("Please make sure cash is greater than bill");
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
