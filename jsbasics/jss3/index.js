console.log("suprabhat");

// let lastName = 'Jain';//this is a primitive type of string

// let firstName = new String ('Himanshu');//this is an object

// let message = `     FORMAL LETTER
// ${firstName}
// sector-12 , pratapnagar,
// Jaipur- XXXXXXXX,

// 30 may, 2023
// M/S Khurana & sons,
// Grocery pvt. ltd.
// Jaipur

// Dear sir,
// content:-

// thank you
// Himanshu Jain`;

// console.log(message);

// // let words = message.split(' ');

// // console.log(words);
// let date = new Date();

// let date2 = new Date('June 30 7753 12:37');

// let date3 = new Date(2003 , 4 , 4, 3);
// console.log(date3);

// let numbers = [1,56,3,8,4,67];

// console.log(numbers);
// //insertion:-
// //end
// numbers.push(45);
// console.log(numbers);
// //begin
// numbers.unshift(32);
// console.log(numbers);
// //middle
// numbers.splice(2 , 0 ,'a' ,'f','g','t');
// console.log(numbers);

// //Searching
// console.log(numbers.indexOf(8));

// //we want to check if a number exist in an array

// if (numbers.indexOf(5) != -1) {
//     console.log("Present");

// }//this is not a good aproach

// console.log(numbers.includes(56));

// console.log(numbers.indexOf(1 , 1));

// let courses = [
//     {no:1, naam:'Himanshu'},
//     {no:2, naam:'Jain'}
// ];

// console.log(courses);

// console.log(courses.indexOf({no:1, naam:'Himanshu'}));

// let course = courses.find(function(course){
//     return course.naam == 'Himanshu';
// });
//here we are minimizung the above used find function with the help of arrow function to increase the readebility of code
// let course = courses.find(course => course.naam == 'Himanshu' );

// console.log(course);

// let numbers = [1,2,3,45,6,7,23,454,4,7];
// //end
// numbers.pop();//here 7 will be removed as it is in lasat position
// //begining
// numbers.shift();//here 1 will be removed as it is in first place
// //middle
// numbers.splice(4,1);//here 1 element at index no. 4 will be deleted

// console.log(numbers);
//emptying an array
// let num = [1,2,3,4,5,5,666];
// let num2 = num;

// // num = [];
// // num.length = 0;
// num.splice(0,num.length);

// console.log(num);
// console.log(num2);

//COMBINING AND SPLITTING ARRAY

// let first = [1,2,3,4];
// let second = [5,6,7,8,9];

// let combined = first.concat(second);

// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];

// let sliced = marks.slice();//here an copy of the array will be created
// // let sliced = marks.slice(2);//here all the elements after index 2 will be copied to sliced array
// // let sliced = marks.slice(2,6);//here the numbers from index 2 to 6 will be copied in sliced array

// console.log(sliced);

// let first = [1,2,3,4];
// let second = [5,6,7,8,9];

// let combined = [...first,'a',...second,'b'];

// console.log(combined);

// //creating a copy usinfg the srpead operator
// let another = [...combined];

// console.log(another);

//iterating an array

// let arr = [464,5,654,651,654,64,4,54];

//using for-of loop

// for(let value of arr){
//     console.log(value);
// }

//using forEach loop
// arr.forEach(him => console.log(him));

//JOining arrays
//here in joining we will join the elements of the same arrray

// let mun = [56,5,58,2,56,4,2,5,4,5,]
// const joined = mun.join(',');

// console.log(joined);

// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let join = parts.join('+');

// console.log(join);

// sorting in array
// in javascript we can simpy use the sort function to do sorting

// let yum = [4,65,46,64,75,57,85,48];

// yum.sort();

// console.log(yum);

// yum.reverse();
// console.log(yum);

//Filtering Arrays > filter()
// let mm =  [1,2,-4,-5];

// let filtered = mm.filter(vslue => vslue >= 0);

// console.log(filtered)

//mapping arrays > map()
//mappin maps each elemen of arrays to something

// let numbers = [7,8,9,10];
// console.log(numbers);

// let items = numbers.map(vslue => 'student_no' + vslue);

// console.log(items);

// now we will use mapping and filltering together

let numbers = [1, 2, -18, -25];

//let filtered = numbers.filter((value) => value >= 0);

// let items = filtered.map(function(numbers) {
//     return {value: numbers};
// })
//or

// let items = filtered.map(num => {value: num});
//or
let items = numbers.filter(value => value >= 0).map(num => {value: num});

console.log(items);
