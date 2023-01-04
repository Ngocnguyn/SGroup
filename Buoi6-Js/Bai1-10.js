// 1. Tim hieu arrow function va anonymous function
// - Arrow function la mot tinh nang cua ES6 giup viet code ngan gon hon
/* Anonymous function (hàm vô danh) là một hàm không có tên trong JavaScript.
Nó được khai báo trong dạng một biến hoặc tham số của một hàm khác, và không 
có tên để gọi lại sau này. */
const bai1 = () =>{
    const result = 'Arrow funtion la...'
    return result;
}
// 2.Viết hảm Javascript trả về chuỗi thông tin ngày giờ hiện tại

function getDateTime() {
	const currentDate = new Date();
    const dateString = `${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDate()}`;
    return dateString;	
}
const now = getDateTime()
console.log('Now is: ' + now) 
// Now is:....
//3. Viết hàm để in ra ngày tháng năm với các định dạng mm-dd- yyyy, 
//   mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
function allFormatsOfDate({day, month, year}) {
    const formats = [
    `${month}-${day}-${year}`,
    `${month}/${day}/${year}`,
    `${day}-${month}-${year}`,
    `${day}/${month}/${year}`,
    ];
    return formats;
}

const date = { 
	day: 28,
	month: 12,
	year: 2022
}

const result = allFormatsOfDate(date)
console.log(result)
// 4.Viết hàm JavaScript để kiểm tra xem một số nguyên (1 < n < 10^1000) đã cho có chuỗi chữ số tăng hay không. Chuỗi chữ số tăng là chuỗi chữ số có độ dài bé nhất là 3, chữ số đứng ở sau lớn hơn chữ số đứng trước (ví dụ: 123, 456, 123456, 6789)
function isIncreaseChainNumber(number) {
    // chuyen sang string 
    const numberString = number.toString();
    if (numberString.length < 3) {
      return false;
    }
    for (let i = 1; i < numberString.length; i++) {
      if (numberString[i] < numberString[i - 1]) {
        return false;
      }
    }
    return true;
}
const number1 = 123456789n
const number2 = 123432112321n
const number3 = 988811111n

console.log(isIncreaseChainNumber(number1))  // true
console.log(isIncreaseChainNumber(number2)) // false
console.log(isIncreaseChainNumber(number3)) // false
// 5.Viết một hàm JavaScript trả về một chuỗi đã được thay thế mỗi ký tự với ký tự cách nó n ký tự trong bảng chữ cái. (mã hóa caesar)
function caesarCypher(text, step) {
	const strings = text.split("")
    const encoded = []

    for(const string of strings){
        const asciiCode = string.charCodeAt();
        if(asciiCode >= 65 && asciiCode <=90){
            encoded.push(String.fromCharCode(((asciiCode - 65 + step) % 26) + 65));
        }
        else if(asciiCode>=97 && asciiCode<=122){
            encoded.push(String.fromCharCode(((asciiCode - 97 + step) % 26) + 97));
        }
        else{
            encoded.push(string)
        }
    }
    return encoded.join("");
}
const caesarCipher = (plain)

const name = "Hoang Nhan"
const cypherText = caesarCypher(name, 3)

console.log(cypherText) // Krdqj Qkdq
// 6.Viết chương trình hiển thị số xuất hiện nhiều lần nhất trong mảng
function highestFreqNumber(numbers) {
    numbers.sort();
    let max = [0,0];

    let count = 1;
    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] == numbers[i+1]) ++count;
        else{
            // max[1] = 0
            // So sanh so lan xuat hien count voi max[1]
            if(max[1] < count){
                // max[0] chua gia tri so trong mang
                max[0] = numbers[i];
                // max[1] chua gia tri xuat hien cua so do
                max[1] = count;
            }
            // tra ve count = 1 cho so tiep theo
            count = 1
        }
    }
    console.log(max[0]);

}

const numbers = [1,2,3,5,6,7,4,7,3,2,1,6,7,8,7,7,1,7,3,7,9999,7,123,7]

console.log(highestFreqNumber(numbers)) // 7
// 7.Viết chương trình để kiểm tra xem chuỗi (không phân biệt hoa thường) chứa 'javascript' hay không
const isIncludeJS = (str) => {
	 return str.toLowerCase().includes("javascript")
}

const str1 = "jAVAscriptttt ssssucKs"
const str2 = "javaaaaScript sucks"
const str3 = "888javaScript888"

console.log(isIncludeJS(str1)); //false
console.log(isIncludeJS(str2)); //false
console.log(isIncludeJS(str3)); //true
// 8.Viết hàm trả về tên tiếng Anh của tháng từ một số cụ thể: ví dụ 1 → January
const getMonthName = (monthNumber) => {
    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
  return monthNames[monthNumber - 1];
}
   
console.log(getMonthName(3)) // March
console.log(getMonthName(4)) // April
//9.Viết một hàm JavaScript tìm từ dài nhất trong chuỗi
const longestWord = (str) => {
    const words = str.split(' ');
    let maxLength = words[0];

    for(let word of words) {
        if(word.length > maxLength.length){
            maxLength = word;
        }
    }
    return maxLength;
}

const str = "Little darlin', it's been a loooooong, cold, lonely winter"

console.log(longestWord(str)) // loooooong
// 10.Viết hàm tính tổng các chữ số của một số nguyên tố (lớn) sử dụng hàm reduce
const sum = (number) => {
    const num = number.toString().split("");
    // Khoi tao sumNumber = 0 va cong vao
    return num.reduce((sumNumber,value) => sumNumber + parseInt(value), 0)
}
  
  console.log(sum(1231312321378127391237219312n)) // 90
  console.log(sum(99999999999999999999999999999n))// 261
