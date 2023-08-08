function demo(num1:number,...num2:number[])
{
    let n1=num1;
    for(let item of num2)
    {
        n1+=item;
    }
    console.log(n1);

}
demo(10,90,78,89,93)