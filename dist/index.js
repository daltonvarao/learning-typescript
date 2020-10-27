"use strict";
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var button = document.querySelector("button");
function sum(a, b) {
    return a + b;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(sum(Number(num1.value), Number(num2.value)));
});
