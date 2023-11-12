//import {Promise} from 'es6-promise'

const numEle1 = document.getElementById("num1") as HTMLInputElement;
const numEle2 = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

let resultNum: Array<number> = [];
let resultString: string[] = [];

type NumOrString = number|string;

type Result = { val: number; timestamp: Date }

interface ResultObj{
    val: number; 
    timestamp: Date 
}

function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

function printResult(resultObj: ResultObj) {
  console.log(resultObj.val);
}
buttonElement.addEventListener("click", () => {
  const num1 = numEle1.value;
  const num2 = numEle2.value;
  const result = add(+num1, +num2);
  console.log(result);
  resultNum.push(result as number);
  const stringResult = add(num1, num2);
  console.log(stringResult);
  resultString.push(stringResult as string);
  
  
  printResult({ val: result as number, timestamp: new Date() });
  console.log(resultNum, resultString);
});

const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve("it works")
    },1000)
})
myPromise.then((result)=>{
    console.log(result.split("w"));
})
// const myPromise = new Promise()
