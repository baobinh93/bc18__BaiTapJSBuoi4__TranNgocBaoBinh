// Input :
// - Nhập 3 cạnh của tam giác

// Xử lý:
// - Áp dụng pytago để kiểm tra tam giác vuông;
// - So sánh các cặp cạnh để kiểm tra tam giác cân hoặc đều;
// - Kiểm tra từ tam giác Đều => Vuông Cân => Cân => Thường;

// Out put:
//  - Xuất ra tính chất của tam giác

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

function timTamGiac(x, y, z) {
  let isVuong = false;
  let isCan = false;
  let isDeu = false;

  if (
    Math.pow(x, 2) - (Math.pow(y, 2) + Math.pow(z, 2)) === 0 ||
    Math.pow(y, 2) - (Math.pow(z, 2) + Math.pow(x, 2)) === 0 ||
    Math.pow(z, 2) - (Math.pow(x, 2) + Math.pow(y, 2)) === 0
  ) {
    isVuong = true;
  }

  if (x == y && y == z) {
    isDeu = true;
  }

  if (x == y || y == z || z == x) {
    isCan = true;
  }

  let result;
  if (isDeu) {
    return "Tam giác đều";
  } else if (isVuong && isCan) {
    return "Tam giác vuông cân";
  } else if (isVuong) {
    return "Tam giác vuông";
  } else if (isCan) {
    return "Tam giác cân";
  } else {
    return "Tam giác thường";
  }
}

calculateBtnEl.onclick = function () {
  let x = firstInputEl.value * 1;
  let y = secondInputEl.value * 1;
  let z = thirdInputEl.value * 1;

  if (checkNum(x) && checkNum(y) && checkNum(z)) {
    resultEl.value = timTamGiac(x, y, z);
  } else {
    alert("Nhập sai dữ liệu");
    resultEl.value = null;
  }
};
