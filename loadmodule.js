"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classdemo_1 = require("./classdemo");
//so when we use the circle,pi  , automatically it has been exported from classdemo and imported in this loadmodule.ts
var circle = new classdemo_1.Circle(5);
console.log(circle.getarea());
console.log(classdemo_1.pi);
//Template lit string
//so whenever there is needed of combination of string and integer, we can make use of Template lit string
var username = "marry";
var age = 24;
console.log("Heloo ".concat(username, " your age is ").concat(age));
