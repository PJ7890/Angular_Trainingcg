"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classdemo_1 = require("./classdemo");
//so when we use the circle,pi  , automatically it has been exported from classdemo and imported in this loadmodule.ts
var circle = new classdemo_1.Circle(5);
console.log(circle.getarea());
console.log(classdemo_1.pi);
