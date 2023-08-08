var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var book = ["AI", "NW", "OOAD"];
// for(let item of book)
// {
//     console.log(item);
// }
//copy of array, Merge Array -- spread operator -> ...(3 dots)
var newbooklist = __spreadArray([], book, true);
var comicbook = ["ABC", "DEF"];
comicbook = __spreadArray([], newbooklist, true);
var mergearray = __spreadArray(__spreadArray([], newbooklist, true), comicbook, true);
for (var _i = 0, mergearray_1 = mergearray; _i < mergearray_1.length; _i++) {
    var item = mergearray_1[_i];
    console.log(item);
}
