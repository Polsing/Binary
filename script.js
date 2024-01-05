
// เลขฐานสิบ -> เลขฐานสอง
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
  }
  // เลขฐานสอง -> เลขฐานสิบ
  function binaryToDecimal(binary) {
    return parseInt(binary, 2);
  }
  // เลขฐานสิบ -> เลขฐานแปด
  function decimalToOctal(decimal) {
    return decimal.toString(8);
  }
  // เลขฐานแปด -> เลขฐานสิบ
  function octalToDecimal(octal) {
    return parseInt(octal, 8);
  }
  // เลขฐานสิบ -> เลขฐานสิบหก
  function decimalToHexadecimal(decimal) {
    return decimal.toString(16);
  }
  // เลขฐานสิบหก -> เลขฐานสิบ
  function hexadecimalToDecimal(hexadecimal) {
    return parseInt(hexadecimal, 16);
  }
  // เลขฐานสอง -> เลขฐานแปด
  function binaryToOctal(binary) {
    return decimalToOctal(binaryToDecimal(binary));
  }
  // เลขฐานแปด -> เลขฐานสอง
  function octalToBinary(octal) {
    return decimalToBinary(octalToDecimal(octal));
  }
  // เลขฐานสอง -> เลขฐานสิบหก
  function binaryToHexadecimal(binary) {
    return decimalToHexadecimal(binaryToDecimal(binary));
  }
  // เลขฐานสิบหก -> เลขฐานสอง
  function hexadecimalToBinary(hexadecimal) {
    return decimalToBinary(hexadecimalToDecimal(hexadecimal));
  }
  // เลขฐานแปด -> เลขฐานสิบหก
  function octalToHexadecimal(octal) {
    return decimalToHexadecimal(octalToDecimal(octal));
  }
  // เลขฐานสิบหก -> เลขฐานแปด
  function hexadecimalToOctal(hexadecimal) {
    return decimalToOctal(hexadecimalToDecimal(hexadecimal));
  }

  // ตรวจสอบ select
  function checkSlect(){
        let select1 = document.getElementById('select1').value;
        let select2 = document.getElementById('select2').value;
        return select1 + select2;
      }
    
    function toggleresult( ById1, ById2){
        var userInput = document.getElementById(ById1).value;
        var resultElement = document.getElementById(ById2);
    
        var rst = document.getElementById('rst');
        let select = checkSlect();
        
            // ถ้าเป็นตัวเลข
            switch (select) {
                case '11':
                    resultElement.innerText = userInput;
                    rst.style.outline = '2px solid green';
                    break;
                case '12':
                    resultElement.innerText = binaryToOctal(userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '13':
                    resultElement.innerText = binaryToDecimal(userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '14':
                    resultElement.innerText = binaryToHexadecimal(userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '21':
                    resultElement.innerText = octalToBinary(userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '22':
                    resultElement.innerText = userInput;
                    rst.style.outline = '2px solid green';
                    break;
                case '23':
                    resultElement.innerText = octalToDecimal(userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '24':
                    resultElement.innerText = octalToHexadecimal(userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '31':
                    resultElement.innerText = decimalToBinary(+userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '32':
                    console.log(userInput.toString(16))
                    resultElement.innerText = decimalToOctal(+userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '33':
                    resultElement.innerText = userInput;
                    rst.style.outline = '2px solid green';
                    break;
                case '34':
                    resultElement.innerText = decimalToHexadecimal(+userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '41':
                    resultElement.innerText = hexadecimalToBinary(userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '42':
                    resultElement.innerText = hexadecimalToOctal(userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '43':
                    resultElement.innerText = hexadecimalToDecimal(userInput);
                    rst.style.outline = '2px solid green';
                    break;
                case '44':
                    resultElement.innerText = userInput;
                    rst.style.outline = '2px solid green';
                    break;  
                default:
                    resultElement.innerText = 'Nan';
                    break;
            }
            
        }
      

function updateClock() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // เริ่มจาก 0 (มกราคม) ถึง 11 (ธันวาคม)
    var year = currentDate.getFullYear();

    var time = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds) + " " + padZero(day) + "/" + padZero(month) + "/" + year

    document.getElementById('time').innerHTML = time;
  }

  function padZero(number) {
    return (number < 10) ? "0" + number : number;
  }
  // เรียกใช้ updateClock() ทุก 1 วินาที
  setInterval(updateClock, 1000);
  updateClock();