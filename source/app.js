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
      boxesArray.push("0");
    }
  });
  console.log(boxesArray);
  return boxesArray.join();
});

const sudokuSolver = async () => {
  const options = {
    method: "POST",
    url: "https://solve-sudoku.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "eb25f7b524mshc6ceba9410eefdcp159a3djsn6774bd1cbf53",
      "X-RapidAPI-Host": "solve-sudoku.p.rapidapi.com",
    },
    body: `{"puzzle":"${solve}"}`,
  };

  fetch("https://solve-sudoku.p.rapidapi.com/", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
