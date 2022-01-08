// Input :
// - Nhập ngày tháng năm
// - Bỏ qua năm nhuận

// Xử lý:
// - Tìm xem năm nhập vô có phải nẳm nhuận hay không
// - Năm nhuần là năm chia hết cho 4 và không chia hết cho 100 hoặc là năm chia hêt cho 400
// - Tìm số ngày tối của tháng có xét năm nhuận

// Out put:
//  -TTháng đó có tổi đa bao nhiêu ngày

const firstInputEl = document.querySelector("#first");
const secondInputEl = document.querySelector("#second");
const thirdInputEl = document.querySelector("#third");

const calculateBtnEl = document.querySelector("#submitBtn");

const resultEl = document.querySelector("#result");

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

calculateBtnEl.onclick = function () {
  let month = firstInputEl.value * 1;
  let year = secondInputEl.value * 1;

  let maxDay = findMaxDayOfMonth(month, year);

  if (checkNum(month) && checkNum(year) && month <= 12) {
    resultEl.value = maxDay + " ngày";
  } else {
    alert("Nhập sai dữ liệu");
    resultEl.value = null;
  }
};
