import { Circle, pi } from "./classdemo";

//so when we use the circle,pi  , automatically it has been exported from classdemo and imported in this loadmodule.ts
var circle=new Circle(5); 
console.log(circle.getarea());
console.log(pi);
