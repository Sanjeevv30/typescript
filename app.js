//import {Promise} from 'es6-promise'
var numEle1 = document.getElementById("num1");
var numEle2 = document.getElementById("num2");
var buttonElement = document.querySelector("button");
var resultNum = [];
var resultString = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener("click", function () {
    var num1 = numEle1.value;
    var num2 = numEle2.value;
    var result = add(+num1, +num2);
    console.log(result);
    resultNum.push(result);
    var stringResult = add(num1, num2);
    console.log(stringResult);
    resultString.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(resultNum, resultString);
});
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("it works");
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split("w"));
});
// const myPromise = new Promise()
