import { Circle, pi } from "./classdemo";

//so when we use the circle,pi  , automatically it has been exported from classdemo and imported in this loadmodule.ts
var circle=new Circle(5); 
console.log(circle.getarea());
console.log(pi);


//Template lit string
//so whenever there is needed of combination of string and integer, we can make use of Template lit string
var username:string= "marry";
var age:number=24;
console.log(`Heloo ${username} your age is ${age}`);
