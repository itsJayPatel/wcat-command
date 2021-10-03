#!/usr/bin/env node

let error = require("./error");
let preprocess = require("./preprocess");
let scanner = require("./scanner");
let containsS = require("./options/s");
let containsN = require("./options/n");
let containsB = require("./options/b");
let output = require("./output");

let inputArr = process.argv.slice(2);

let preprocessObj = preprocess(inputArr);

let fileArr = preprocessObj.files;
let optionArr = preprocessObj.options;

let err = error(fileArr, optionArr);
if (err == false) {
  let contentArr = scanner(fileArr);

  contentArr = containsS(contentArr, optionArr);

  contentArr = containsN(contentArr, optionArr);

  contentArr = containsB(contentArr, optionArr);

  output(contentArr);
}