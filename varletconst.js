function test() {
    var pi = 3.14;
    var num1 = 90;
    {
        //let num2:number=100;   
        var num2 = 100;
        console.log(num1);
        console.log(num2);
    }
    console.log(num1);
    console.log(num2);
}
test();
