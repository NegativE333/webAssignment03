let selectedNumbers = [];

function addNumberToList() {
  const numberInput = document.getElementById("numberInput");
  const inputValue = parseInt(numberInput.value);

  if (!isNaN(inputValue)) {
    const inputList = document.getElementById("inputList");

    inputList.innerHTML += `<div class="list-item"> ${inputValue} </div>`;

    numberInput.value = "";
  }
}

function selectNumber(event) {
  const selectedNumber = event.target.textContent;
  const index = selectedNumbers.indexOf(selectedNumber);

  if (index === -1) {
    selectedNumbers.push(selectedNumber);
    event.target.style.backgroundColor = "#ddd";
  } else {
    selectedNumbers.splice(index, 1);
    event.target.style.backgroundColor = "";
  }
}

function sortSelectedNumbers() {
  const sortList = document.getElementById("sortList");

  for (var i = 0; i < selectedNumbers.length; i++) {
    for (var j = 0; j < selectedNumbers.length - i - 1; j++) {
      if (selectedNumbers[j] > selectedNumbers[j + 1]) {
        var temp = selectedNumbers[j];
        selectedNumbers[j] = selectedNumbers[j + 1];
        selectedNumbers[j + 1] = temp;
      }
    }
  }

  sortList.innerHTML = "";

  selectedNumbers.forEach((number) => {
    sortList.innerHTML += `<div class="sort-item"> ${number} </div>`;
  });
}

function clearLists() {
    window.location.reload();
}
