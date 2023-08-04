var pi = 3.14;
var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.getarea = function () {
        return pi * this.radius * this.radius;
    };
    return circle;
}());
var obj = new circle(4);
console.log(obj.getarea());
