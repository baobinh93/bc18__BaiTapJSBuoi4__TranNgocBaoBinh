// Input :
// - Nhập 3 số nguyên bất kì

// Xử lý:
// - So sánh lần lượt từng cặp số để tìm ra số lớn nhất và nhỏ nhất

// Out put:
// - Sắp xếp thứ tự tăng dần

const firstInputEl = document.querySelector("#first");
const secondInputEl = document.querySelector("#second");
const thirdInputEl = document.querySelector("#third");

const calculateBtnEl = document.querySelector("#submitBtn");

const resultEl = document.querySelector("#result");

function arrNum(x, y, z) {
  if (x <= y && x <= z) {
    if (y <= z) {
      return `${x} <= ${y} <= ${z}`;
    } else {
      return `${x} <= ${z} <= ${y}`;
    }
  } else if (y <= x && y <= z) {
    if (x <= z) {
      return `${y} <= ${x} <= ${z}`;
    } else {
      return `${y} <= ${z} <= ${x}`;
    }
  } else {
    if (x <= y) {
      return `${z} <= ${x} <= ${y}`;
    } else {
      return `${z} <= ${y} <= ${x}`;
    }
  }
}

calculateBtnEl.onclick = function () {
  let x = firstInputEl.value * 1;
  let y = secondInputEl.value * 1;
  let z = thirdInputEl.value * 1;

  let result = arrNum(x, y, z);

  resultEl.value = result;
};
