console.log('chaliye shuru karte hain bina kisi...')
//object creation
// const rectangle={
//     length: 3,
//     bridth: 4,

//     draw: function() {
//         console.log('Drawing rectangle');
//     }
// };

// Factory Function

// function createRectangle(len , bre){
//     return rectangle = {

//         length: len,
//         bridth: bre,

//         draw: function() {
//             console.log('Drawing rectangle');
//         }
//     }
// }

// let rectangleObj = createRectangle(40 , 56);



//contructor function
function Rectangle(){
    this.length= 23;
    this.breadth = 56;
    this.draw = function() {
       console.log('Drawing')
    }
}

// object creation using constructor
// let reactObj = new Rectangle();//new is a type of keyword which gives us an empty object

// reactObj.color = 'yellow';

// delete reactObj.color;
// console.log(reactObj);

// let Rectangle1 = new Function(
//     'length','breadth',`
//     'this.length= length;
//     this.breadth = breadth;
//     this.draw = function() {
//        console.log('Drawing')
//     }`);
// //object creation using Rectsngle1
// let rect = new Rectangle1(2,3);

// console.log(rect);


// let a = 10;
// let b =a;
// a++;
// console.log(a);
// console.log(b);

// let a = {value: 10};
// let b =a;
// a.value++;
// console.log(a);
// console.log(b);
//Note:- Primitives are copied by their value and References are copied by their address/refrences.

// let a = 10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

// let a = {value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);

let rectangle = {
    length: 2,
   breadth: 677,
};

//for-in loop
// for (let key in rectangle) {
//     //keys are reflected through key variable
//     //value are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }



//for-of loop:- it can only be applied on the iterables
// for(let key of rectangle){
//     console.log(key);//tihs will give an error because objects are not iterables
// }
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

//if-else can also be used for checking if a property is present in that object or not
// if('color' in rectangle){
//     console,log('Present');
// }
// else{
//     console.log('absent');
// }

//Object cloning 
//#1 iteeration

// let src = {
//     a:10,
//     b:23,
//     c:499
// };

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

//#2 Assign

// let src = {
//     a:10,
//     b:23,
//     c:499
// };

// let dest = Object.assign({}, src);

// console.log(dest);

// src.a++;

// console.log(dest);

//#3 spred
let src = {
    a:10,
    b:23,
    c:499
};

let dest = {...src};

console.log(dest);
src.a++;
console.log(dest);