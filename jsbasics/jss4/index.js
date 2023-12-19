// console.log('Suprabhat');

// //run();
// //function declaration
// function run(){
//     console.log('Running');
// }

// // now we will call or invoke the function

// run();

// //Named Function assignment
// let stand = function walk() {
//     console.log('walking');
// };

// //Anonymous Function assignment
// let stand2 = function(){
//     console.log('walking');
// };

// stand();//now you cant call the stand before it declaration because hosting oly works on the declaration not assignment
// let jump = stand;

// jump();

// stand2();

// function sum(a,b){
//     // console.log(arguments);//an argument is an special object which is unipue to js only
//     let total = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;
// }

// //console.log(sum(1,2));
// //console.log(sum(1));
// //console.log(sum());
// //console.log(sum(1,2,3,4,5,6));

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

//rest perameter  --> ...
//it must be the last perameter in the i/p
// function sum(num,value,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6,7,8);

//default parmeters 
// function interest(p,r=5,y=10){//here we have given default parameters to the r and y so if we don't pass on any value it will us the default values
//     return p*r*y/100;
// }

// console.log(interest(10000));

//GETTER SETTER
//getter -> access properties
//setter -> change or mutate propeties

// let person = {
//     fname : 'Himanshu',
//     lname : 'Jain',
//     get fullName(){
//         return `${person.fname} ${person.lname}`;
//     },
//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("Pagal wagal hai kya");
//         }
//         let parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// };

// // function fullName(){
// //     return `${person.fname} ${person.lname}`;
// // }
// //the above function is an read only function

// person.fullName = 'nil neeten mukesh';



//try & catch --> error handling
// try{
//     person.fullName = 'Eren Jaeger';
//     // person.fullName = 8;
// }
// catch(e){
//     // alert('you have sent an incorect data type');
//     alert(e);
// }

// console.log(person.fullName);

//sorting 
// let a = [10,5,4,25];

// a.sort(function(a,b){
//     return a-b;
// });

// console.log(a);

let arr = [1,2,3,4];
// let total = 0;
// for(let value of arr)
//     total += value;

// console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue , 0);
console.log("PRINTING TOTAL SUM:");
console.log(totalSum);
