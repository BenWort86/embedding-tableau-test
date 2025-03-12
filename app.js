console.log("this is a message for the console");

// Defining Variables
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

// function to log information about our viz
function logWorkbookInformation() {
  // get name of workbook
  workbook = viz.workbook;
  console.log(`The workbook name is "${workbook.name}"`);

  // get array of dashboards within workbook
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with the index ${index} is ${element.name}`);
  });

  // find the active sheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);

  // list all of the sheets within our active sheets
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet with index ${index} is ${element.name}`);
  });
}

const oregonWashingtonButton = document.getElementById("oregon_and_washington");
const clearFilterButton = document.getElementById("clear_filter");
const undoButton = document.getElementById("undo");

function oregonWashingtonFunction() {
  console.log(oregonWashingtonButton.value);

  //apply filter to sheets
  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

oregonWashingtonButton.addEventListener("click", oregonWashingtonFunction);

function clearStateFilter() {
  console.log(clearFilterButton.value);

  listSheets.forEach((element) => {
    element.clearFilterAsync("State");
  });
}

clearFilterButton.addEventListener("click", clearStateFilter);

function unDo() {
  console.log(undo.value);

  listSheets.forEach((element) => {
    viz.undoAsync();
  });
}

undoButton.addEventListener("click", unDo);

viz.addEventListener("firstinteractive", logWorkbookInformation);
