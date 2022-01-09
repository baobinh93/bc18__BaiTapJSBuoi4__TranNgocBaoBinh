// Input :
// - Nhập số nguyên có 3 chữ số

// Xử lý:
// - Kiểm tra có dấu âm hay không
// - Tách số nguyên thành từng phần trăm , chục , đơn vị
// - Gán cách đọc cho từng giá trị đó
// - Chú ý các từ : Lẻ - Năm & Lăm - Một & Mốt

// Out put:
//  - Cách đọc bằng chữ của số nguyên đó

const firstInputEl = document.querySelector("#first");

const calculateBtnEl = document.querySelector("#submitBtn");

const resultEl = document.querySelector("#result");

function checkNum(num) {
  if (num % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function cachDocBangChu(num) {
  let isNegative = num.toString()[0] === "-";
  let numAbsolute = Math.abs(num);
  let hangTram = Math.floor(numAbsolute / 100);
  let hangChuc =
    Math.floor(numAbsolute / 10) - Math.floor(numAbsolute / 100) * 10;
  let hangDonVi = numAbsolute % 10;

  console.log(isNegative, hangTram, hangChuc, hangDonVi);
  let cachDocSoAm = "";
  let cachDocHangTram;
  let cachDocHangChuc;
  let cachDocHangDonVi;

  if (isNegative) {
    cachDocSoAm = "Âm";
  }
  switch (hangTram) {
    case 0:
      cachDocHangTram = "";
      break;
    case 1:
      cachDocHangTram = "Một trăm";
      break;
    case 2:
      cachDocHangTram = "Hai trăm";
      break;
    case 3:
      cachDocHangTram = "Ba trăm";
      break;
    case 4:
      cachDocHangTram = "Bốn trăm";
      break;
    case 5:
      cachDocHangTram = "Năm trăm";
      break;
    case 6:
      cachDocHangTram = "Sáu trăm";
      break;
    case 7:
      cachDocHangTram = "Bảy trăm";
      break;
    case 8:
      cachDocHangTram = "Tám trăm";
      break;
    case 9:
      cachDocHangTram = "Chín trăm";
      break;
  }
  switch (hangChuc) {
    case 0:
      cachDocHangChuc = "";
      break;
    case 1:
      cachDocHangChuc = "Mười";
      break;
    case 2:
      cachDocHangChuc = "Hai mươi";
      break;
    case 3:
      cachDocHangChuc = "Ba mươi";
      break;
    case 4:
      cachDocHangChuc = "Bốn mươi";
      break;
    case 5:
      cachDocHangChuc = "Năm mươi";
      break;
    case 6:
      cachDocHangChuc = "Sáu mươi";
      break;
    case 7:
      cachDocHangChuc = "Bảy mươi";
      break;
    case 8:
      cachDocHangChuc = "Tám mươi";
      break;
    case 9:
      cachDocHangChuc = "Chín mươi";
      break;
  }
  switch (hangDonVi) {
    case 0:
      cachDocHangDonVi = "";
      break;
    case 1:
      cachDocHangDonVi = "Một";
      break;
    case 2:
      cachDocHangDonVi = "Hai";
      break;
    case 3:
      cachDocHangDonVi = "Ba";
      break;
    case 4:
      cachDocHangDonVi = "Bốn";
      break;
    case 5:
      cachDocHangDonVi = "Năm";
      break;
    case 6:
      cachDocHangDonVi = "Sáu";
      break;
    case 7:
      cachDocHangDonVi = "Bảy";
      break;
    case 8:
      cachDocHangDonVi = "Tám";
      break;
    case 9:
      cachDocHangDonVi = "Chín";
      break;
  }

  if (num === 0) {
    cachDocHangTram = "";
    cachDocHangChuc = "";
    cachDocHangDonVi = "Không";
  } else if (hangTram == 0 && hangChuc == 0) {
    cachDocHangTram = "";
    cachDocHangChuc = "";
  } else if (hangDonVi == 0 && hangChuc == 0) {
    cachDocHangChuc = "";
  } else if (hangDonVi == 5 && hangChuc > 0) {
    cachDocHangDonVi = "Lăm";
  } else if (hangDonVi == 1 && hangChuc > 1) {
    cachDocHangDonVi = "Mốt";
  } else if (hangTram > 0 && hangChuc == 0) {
    cachDocHangChuc = "Lẻ";
  }
  return (
    cachDocSoAm +
    " " +
    cachDocHangTram +
    " " +
    cachDocHangChuc +
    " " +
    cachDocHangDonVi
  );
}

calculateBtnEl.onclick = function () {
  let number = firstInputEl.value * 1;

  if (checkNum(number) && number < 1000) {
    resultEl.value = cachDocBangChu(number);
  } else {
    alert("Nhập sai dữ liệu");
    resultEl.value = null;
  }
};
