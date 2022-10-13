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
    data: {
      puzzle:
        "2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3",
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};