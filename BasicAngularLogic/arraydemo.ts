var book:string[]=["AI", "NW", "OOAD"];
// for(let item of book)
// {
//     console.log(item);
// }

//copy of array, Merge Array -- spread operator -> ...(3 dots)
var newbooklist:string[] = [...book];

var comicbook:string[] = ["ABC", "DEF"];

var mergearray:string[] = [...newbooklist,...comicbook];
for(let item of mergearray)
{
    console.log(item);
}