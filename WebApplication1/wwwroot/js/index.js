﻿var x = 0;
var s = "";

console.log("Hello Pluralsight");

var theForm = document.getElementById("theForm");
theForm.hidden = true;

var button = documrnt.getElementById("buyButton");
button.addEvenListener("click", function () {
    console.log("Buying Item");
});

var productInfo = document.getElementByClassName("product-props");
var listItems = productInfo.item[0].children;