"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.pi = void 0;
exports.pi = 3.14;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getarea = function () {
        return exports.pi * this.radius * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
//var obj=new circle(4);
//console.log(obj.getarea());
