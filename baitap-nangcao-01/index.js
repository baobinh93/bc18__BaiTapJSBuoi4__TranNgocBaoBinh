// Input :
// - Nhập ngày tháng năm
// - Bỏ qua năm nhuần

// Xử lý:
// - Phân loại tháng nhập vô có 30 hay 31 ngày
// - Tìm ngày tiếp theo canh theo ngày tối đa trong tháng

// Out put:
//  - Ngày - Tháng năm của ngày tiếp theo

const firstInputEl = document.querySelector("#first");
const secondInputEl = document.querySelector("#second");
const thirdInputEl = document.querySelector("#third");

const calculateBtnEl = document.querySelector("#submitBtn--next");
const calculatePreBtnEl = document.querySelector("#submitBtn--pre");

const resultEl = document.querySelector("#result--next");
const resultPreEl = document.querySelector("#result--pre");

function checkNum(num) {
  if (num > 0 && num % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function findMaxDayOfMonth(mon, year) {
  let bonus = 0;
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    bonus = 1;
  }
  let maxDay;
  if (mon == 2) {
    maxDay = 28 + bonus;
  } else if (
    mon == 1 ||
    mon == 3 ||
    mon == 5 ||
    mon == 7 ||
    mon == 8 ||
    mon == 10 ||
    mon == 12
  ) {
    maxDay = 31;
  } else {
    maxDay = 30;
  }
  return maxDay;
}

function findNextDay(date, month, year) {
  let result;
  let maxDay = findMaxDayOfMonth(month, year);

  if (date == 31 && month == 12) {
    result = `01/01/${year + 1}`;
  } else if (date == maxDay) {
    result = `01/${month + 1}/${year}`;
  } else {
    result = `${date + 1}/${month}/${year}`;
  }

  return result;
}

function findPreDay(date, month, year) {
  let result;
  let maxDay = findMaxDayOfMonth(month, year);

  if (date == 1 && month == 1) {
    result = `31/12/${year - 1}`;
  } else if (date == 1) {
    result = `${findMaxDayOfMonth(month - 1, year)}/${month - 1}/${year}`;
  } else {
    result = `${date - 1}/${month}/${year}`;
  }

  return result;
}

calculateBtnEl.onclick = function () {
  let date = firstInputEl.value * 1;
  let month = secondInputEl.value * 1;
  let year = thirdInputEl.value * 1;

  let maxDay = findMaxDayOfMonth(month, year);

  if (
    checkNum(date) &&
    checkNum(month) &&
    checkNum(year) &&
    date <= maxDay &&
    month <= 12
  ) {
    resultEl.value = findNextDay(date, month, year);
  } else {
    alert("Nhập sai dữ liệu");
    resultEl.value = null;
  }
};
calculatePreBtnEl.onclick = function () {
  let date = firstInputEl.value * 1;
  let month = secondInputEl.value * 1;
  let year = thirdInputEl.value * 1;

  let maxDay = findMaxDayOfMonth(month, year);

  if (
    checkNum(date) &&
    checkNum(month) &&
    checkNum(year) &&
    date <= maxDay &&
    month <= 12
  ) {
    resultPreEl.value = findPreDay(date, month, year);
  } else {
    alert("Nhập sai dữ liệu");
    resultPreEl.value = null;
  }
};
