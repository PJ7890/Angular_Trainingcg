export const pi=3.14;
export class Circle{
    private radius:number;

    constructor(radius:number)
    {
        this.radius=radius;
    }

    getarea()
    {
        return pi*this.radius*this.radius;
    }
}

//var obj=new circle(4);
//console.log(obj.getarea());