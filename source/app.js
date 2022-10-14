const sudoku = document.querySelector(".sudoku");
const solveBtn = document.querySelector("#solve");

for (let i = 0; i < 81; i++) {
  const createInput = document.createElement("input");
  createInput.setAttribute("type", "number");
  createInput.setAttribute("min", "1");
  createInput.setAttribute("max", "9");
  createInput.setAttribute("class", "inputBox");
  sudoku.appendChild(createInput);
}

const solve = solveBtn.addEventListener("click", function () {
  const inputBoxes = document.querySelectorAll(".inputBox");
  let boxesArray = [];
  inputBoxes.forEach(function (el) {
    if (el.value) {
      boxesArray.push(el.value);
    } else {
      boxesArray.push(".");
    }
  });
  console.log(boxesArray);
  const solveSudoku = boxesArray.join("");
  sudokuSolver(solveSudoku);
});

const sudokuSolver = async (data) => {
  const options = {
    method: "POST",
    url: "https://solve-sudoku.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "eb25f7b524mshc6ceba9410eefdcp159a3djsn6774bd1cbf53",
      "X-RapidAPI-Host": "solve-sudoku.p.rapidapi.com",
    },
    body: `{"puzzle":"${data}"}`,
  };

  const populateValues = (solution) => {
    const inputBoxes = document.querySelectorAll(".inputBox");
    if (solution) {
      inputBoxes.forEach((el, i) => (el.value = solution[i]));
    }
  };

  fetch("https://solve-sudoku.p.rapidapi.com/", options)
    .then((response) => response.json())
    .then((response) => populateValues(response.solution))
    .catch((err) => console.error(err));
};
