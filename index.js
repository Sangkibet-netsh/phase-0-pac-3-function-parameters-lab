function one(name){
    console.log(`The name is ${name}`);
}
one('Kibet');

//Define a Function That Uses Two Parameters

function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }

logTwoValues(1,5);

function introductionWithLanguage(name,language){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}."`)
}
introductionWithLanguage("Elkana","Javascript");

//Define a Function That Uses an Optional Parameter

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
sayHelloTo('Sang');

function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }
sayHelloTo('Kibet');

function introductionWithLanguage(name,language = "javascript"){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}."`)
}
introductionWithLanguage("Elkana");
