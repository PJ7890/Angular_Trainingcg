function demo(num1) {
    var num2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num2[_i - 1] = arguments[_i];
    }
    var n1 = num1;
    for (var _a = 0, num2_1 = num2; _a < num2_1.length; _a++) {
        var item = num2_1[_a];
        n1 += item;
    }
    console.log(n1);
}
demo(10, 90, 78, 89, 93);
