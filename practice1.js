// sanu(); global variable
// variable is like a container where you can store data

var name="sanika";
console.log(name);

console.log("a"+1);
console.log(3+"t"+7);
console.log(2+"g"+7+"P");
console.log(0+"r"+"p"+9);
console.log(8+9+1+"p");

console.log("*************************************");

// arithmatic operator

var add=num1=30,num2=10;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);//exponantial operator

// assignment operator
console.log(30==10);

// typeof
console.log(typeof(num1));

// conditional operator

var no=50;
console.log(no>40);//greater than
console.log(no<60);//less than
console.log(no>=50);//greater than equal to
console.log(no<=50);//less than equal to
console.log(no!=60);//not equal to

// // logical operator/

var value=num1=110;

console.log(num1>100&&num2<200);
console.log(num1>90&&num2<800);
console.log(num1>10&&num2<400);
console.log(num1>20&&num2<500);

console.log("88*****************88*****");

// datatypes string
var name="sanika";
console.log(name);
console.log(typeof(name));

// // number

var phone_no=1234567812;
console.log(phone_no);
console.log(typeof(phone_no));

// // Boolean

// var age=20;
// if(true)
// {
//     console.log(typeof(true));
// }

// // NaN
// var same;
// console.log(same+1);

// // undefined
// var same;
// console.log(same);

// // null
// var same=null;
// console.log(same);


// // BigInt

// var call=123456789023456789n;
// console.log(typeof(call));

// * if condition
// it evaluate the content only if expression is true


// var height=50;
// if(height>20)
// {
//     console.log("perfect");
    
// }

// // if else condition
// execute the code whether condition is true or false

// var height=50;
// if(height>50)
// {
//     console.log("invalid");
    
// }
// else{
//     console.log("valid");
    
// }

// // switch case 
// switch statement is used to execute one code from multiple expression

// var month="a";
// for(month=100; month>1; month--)
// {
    
// switch(month){

//     case 1:
//         console.log("january");
//         break;

//      case 2:
//         console.log( "february");
//         break;
        
     
//      case 3:
//         console.log( "March");
//         break;
        
//      case 4:
//         console.log("April");
//         break;
        
//      case 5:
//         console.log("may");
//         break;
        
//      case 6:
//         console.log("june");
//         break;
        
//      case 7:
//         console.log("july");
//         break;
        
//      case 8:
//         console.log("august");
//         break;
        
//      case 9:
//         console.log("september");
//         break;
        
//      case 10:
//         console.log(" october:");
//         break;
        
//      case 11: 
//         console.log("November:");
//         break;
        
//        case 12:
//         console.log("december");
//         break; 

//       default:
//         console.log("not defined");
//         break;
        
// }  

// }

// function call

// function sanika(age)

// {
//    if(age>20)
//    {
//       console.log("valid");
      
//    }
//    else{
//       console.log("invalid");
      
//    }
   
// }
// sanika(19)

// function pra(days)

// {
//    switch(days)
//    {
//       case 1:
//    console.log("sunday");
//    break;
//  case 2:
//    console.log("monday");
//    break;
//    case 3:
//       console.log("tuesday");
//       break;
//       case 4:
//       console.log("wednesday");
//       break;
//       case 5:
//          console.log("thursday");
//          break;
//        case 6:
//          console.log("friday");
//          break;
//          case 7:
//          console.log("saturday");
//          break;
//          default:
//           console.log("holiday");
//           break; 
   
//    }
// }
// pra(2);


// * global scope of variable
// global variable is accesible from any function
// a variable declare outside the function or declare with window object is known as global variable

//  var a=10;  //declare and assing the value
// var a=88;   //redeclare and reassing the value to same variable
// let l=30;
//     l=90;   //cant redeclare but reassign the value in let

// const c=79
// console.log(a);
// console.log(c);
// i=7
// console.log(i);
// for(var i=2; i<=20;i++)
// {
//    console.log(i);
   
// }


// let bg=89;

// function sanu()
// {
//    // c=77;
//    var b=100;
//    // var name=10;
//     let bg=90;
//    console.log(bg);
// }

// console.log("**********************************");


//    // array methods

//    var array=["a","b","c","d","e"]
//    console.log(array.length);
//    console.log(array.push("p"));/ it add one or more element to the end of en array
//    console.log(array);
//    console.log(array.pop());/it remove the last/end element of an array
//    console.log(array);
//    console.log(array.shift());/it used to remove the first element
//    console.log(array);
//    console.log(array.unshift("p"));/it used to add the element at the start of an array
//    console.log(array);

//    console.log("*******************************");
   
//* Map
// It creates a new array by applying a function to each element of the original array.

// let arry22=[12,56,78,78,89]

//    function mult(num)
//    {
//       return(num*2);
      
//    }
//    let array2=arry22.map(mult)
//    console.log(array2);
//    console.log(arry22);

   // Filter= copy pass method
   // It checks each element of the array and keeps only those elements that pass a condition

   // let num2=[12,47,58,69,56]
   // function sanika(num1)
   // {
   //    if(num1>15){
   //       return(num1)
   //    }
   // }
   // let num5=num2.filter(sanika);
   // console.log(num5);
   // console.log(num2);

   // // join is used to join the array element.
   // just combines array items into a string.

   // let arr21=["a","b","c","d","e"]
  
   // console.log(arr21.join());     //default
   // console.log(arr21.join("*"));  //added
   // console.log(arr21.join("s"));
   // console.log(arr21.join(67));
   // console.log(arr21.join(""));
   // console.log(arr21.join("     "));
   // console.log(arr21.join("......"));

   // include if check the given number present in array or not.
   // method checks whether a specific value exists inside an array or not.
// It gives true if found, and false if not.

//    let sp=["a","b","c","d"]
// console.log(sp.includes("m"));
// console.log(sp.includes("b"));

// Flat is used to flatten the nested array.
// makes nested arrays into a single array.
// You can choose how many levels deep you want to flatten.
// It also removes empty spots in arrays.

// let fly=[1,2,[3,4,5,[6,7,[8,9,[10,11,12],13,14],15,16],17,18],19,20]

// console.log(fly.flat(1));
// console.log(fly.flat(2));
// console.log(fly.flat(Infinity));


// slice method select element from the starting element to till ending element 
// but not includeing ending element
// is used to copy part of an array (without changing the original array).

// let arr=["a","b","c","d","e","f"]
// let arr33=arr.slice(2,4);
// console.log(arr33);


// let fruts=["banana","orange","lemon","apple","mango"]
// let citrus=fruts.slice(1,4)
// console.log(citrus);


// // splice delete the element from target index to delete count number.
// is an array method used to add, remove, or replace elements in an array.

// let burds=["spraw","crow","parrot","duck","eagle"]
// burds.splice(0,3,"owl")/start → index where changes begin
                           // deleteCount → how many elements to remove
//   console.log(burds); /item1, item2... → elements to insert

// * every ()
// *every method check each and every element of the array.
// *every method returns true if the function returns true for all the array elements.
// *if any one element get false  in function then every method returns
//  false for all the elements

// let arr44=[12,13,14,15,16];
// function check(num)
// {
//    console.log(num>10);
   
// }
// arr44.every(check)

// console.log("*******************************");

   
// some method return true if any one element satisfied the condition it is true

// let name=[10,20,30,40]
//    function found(num)
//    {
//       return(num<10);
      
//    }
//    console.log(name.some(found));
   

// reduce method is used to add all element to give a single output value

//    let xyz=[50,40,30,20,10]
//    function fix(num1,num2)
//    {
//      num1=num1+num2;
//      return num1;
     
//    }
//    console.log(xyz.reduce(fix));

// copywithin method copies array elements to another position in an array
// copyWithin method overrides the existing values

// let same=["a","b","c","d","e","f","g","h","i"]
// console.log(same.copyWithin(1,3,7));

// for loop is used when you know number of itterations are fixed

// for(let v=1;v<10;v++)
// {

//    console.log(v);
// }

// // while loop fristly check the condition and then code will be executed

// let num=10;
// while(num<20)
// {
//    console.log(num);
//    num++;
// }
// console.log("error");

// // do while firstly execute the code and then condition will be check
// let num11=20;
// do{
//    console.log(num11);
//    num11++;
   
// }while(num11<30)

//    // for in access the index of given array
//    let array=[10,20,30,40,50,60,70]
//    for(let a in array)
//       {
//       console.log(a);
      
//    }
//    console.log("*******************************");
   

   // for of access the values of given array

   //   let array1=["a","b","c","d","e","f","g","i","g","k"]
   // for(let b in array1)
   //    {
   //    console.log(b);
      
   // }

   // object create,initializer
   // let cities;
   // {};
   // name:"pune"
   // age:"28"
   // console.log(cities);


// Object Literal way(most common way)



// let person = {
//   name: "Alice",
//   age: 25
// };
// console.log(persons);

// Object with the help of function constructor
// Useful when you want to create many objects of the same type.
// In JavaScript, you can declare an object using a function constructor by defining a
//  function that initializes the object properties using this,
//  and then creating an object with the new keyword.

// function student(id,name,email)
// {
//    this.id=id;
//    this.name=name;
//    this.email=email;
// }
// const pratiksha=new student(10,"p","abc");
// console.log(pratiksha);

// const sanika=new student(20,"s","xyz");
// console.log(sanika);

// with the help of object constructor
// To declare an object using the Object Constructor in JavaScript, you use the built-in Object()
//  function with the new keyword.

// let fruit=new Object()
// fruit=fruitname="mango";
// console.log(fruit);

// delete property
// In JavaScript, you can use the delete operator to remove a property from an object.


// let person = {
//   name: "Alice",
//   age: 25,
//   city: "Mumbai"
// };

// delete person.city;

// console.log(person); 

// add property




// // Object.create
// // The Object.create() method creates a new object with the specified prototype object
// // let obj=new Object()
// // let obj21={
// //    name='sanika'
// //    city='pune'
// // }
// // Object.create(obj);
// // console.log(obj);

// // Object.freeze() is used to freeze an object, which means:
// // You cannot add, remove, or change properties.
// // The object becomes immutable 

// const student = {
//   name: "Sanika",
//   age: 20
// };

// // Freeze the object
// Object.freeze(student);

// // Try to modify the object
// student.age = 21;         //  Will not change
// student.city = "Pune";    // Will not add
// delete student.name;      //  Will not delete

// // Print the object
// console.log(student);   

// Object.seal() is used to seal an object, meaning:
// You cannot add or delete properties from the object.
// You can still modify the values of existing properties.
// The object becomes non-extensible, and all its properties become non-configurable.

// const person={
//    name:"pratiksha",
//    age:10
// };
// Object.seal(person);
// person.age=21,
// person.city="mumbai",
// delete person.name;
// console.log(person);


// Object.entries() to iterate over the properties of an object.
// Object.entries(student) returns an array of key-value pairs:




//  Object.defineProperty() to define or modify a property on an object:

// let student={};
// // console.log(Object.defineProperty(student,'name',
// {
//    value:"ascvbvc",
//    writable:true,
//    enumerable:true,
//    configurable:true

// }
// console.log(student.name);
// // student.name='pratiksha';
// console.log(student.name);
// student.age=54;
// student.salaray=77865;
// console.log(student);


// let obj={
//    name:'sanika',
//    age:20,
//    city:'pune'
// }
// console.log(obj); // show all property
// console.log(obj.age); // show single property value
// obj.id=40; // add the property
// console.log(obj.id);
// console.log(obj);
// delete obj.age; // delete property
// console.log(obj.age);
// obj.name='pratiksha'; //change value,override
// console.log(obj.name);

// let student={};
// console.log(student);
//  //object assign
// Object.assign(student,obj)//target object,source object we can assign the properties of source object to taget object.
// console.log(student);

// //object.create it is an create empty object
// let objt=new Object();
// console.log(objt);

   
//    let my=Object.create(obj);
//    my.name="sushant"
//    my.age=22;
//    console.log(my);






 // index can be positive (counting from the start) or negative (counting from the end)
// If the index is out of range, it returns undefined.
// it will be counting the gap

   // let names="pratiksha ure";//pratikshaure
   // console.log(names.at(0));
   // console.log(names.at(2));
   // console.log(names.at(-2));
   // console.log(names.at(-4));
   // console.log(names.at(100));
   // console.log(names.at());
   // console.log(names.at(-3,-2));
   
   // console.log("********************");
   
   
// charAt
// Index starts at 0 → first character is at index 0.
   // In JavaScript, the charAt() method is used to get the character 
   // at a specific index in a string.
   // index → The position of the character you want (0-based index).
// If the index is out of range, it returns an empty string "".
   // let name="sanikaure";
   // console.log(name.charAt(0));
   // console.log(name.charAt(2));
   // console.log(name.charAt(-3));
   // console.log(name.charAt(100));
   // console.log(name.charAt());
   // console.log(name.charAt(-3,-2));
   // console.log("****************");
   
   

   //In JavaScript, the charCodeAt() method returns the Unicode code 
   // (integer value) of the character at a given position in a string.
   // index → The position of the character in the string (0-based).
// If index is out of range, it returns NaN.

   // let imp="pratapure";
   // console.log(imp.charCodeAt(0));
   // console.log(imp.charCodeAt(2));//97=a=ascii values
   // console.log(imp.charCodeAt(-2));
   // console.log(imp.charCodeAt());//112=p=ascii values
   // console.log(imp.charCodeAt(100));
   // console.log(typeof(imp.charCodeAt(-2,-5)));
   // console.log("**********");
   

// charCodeAt() gives UTF-16 code units, not necessarily the actual Unicode code point for 
// characters outside the Basic Multilingual Plane (e.g., emojis or rare symbols).
// For emojis and such, you’d use codePointAt() instead.
   // let imp2="@#$%^&*";
   // console.log(imp.codePointAt(0));
   // console.log(imp.codePointAt(2));
   // console.log("****************");

   // string like array
   //  a string is array-like, but not exactly an array.
// You can access characters in a string using an index (like you do in an array).
// Strings have a length property, just like arrays.
// But strings are immutable — you can’t change a character directly using indexing.
 
// let laptop="Asus"
// console.log(typeof(laptop.charCodeAt(3)));
// console.log(laptop.charCodeAt(3));

// console.log("******************************************************************");


   
   
   // slice
   // slice() does not modify the original string.
// Works with positive and negative indexes.
// The endIndex is not included in the result.
//  the slice() method is used to extract a part of a string without changing the original string.
// startIndex → The position where extraction starts (0-based index).
// endIndex (optional) → The position where extraction ends (not included in the result).
// If omitted, it extracts till the end of the string.



   // let str="learn java";
   // console.log(str.slice(1,4));//positive index count starting of the string
   // console.log(str.slice(1,-2));//negative index count end of the string
   // console.log(str.slice(3));//
   // console.log(str.slice(-4,-1));

   // // substring
   // let cource="welcometojavaclasses";
   // console.log(cource.substring(2,7));//it will incude the start index
   // //but not included end index.
   //start index and end index must be counting from 0.

   // // substr
   // let course1="welcometojavaclasses";
   // console.log(course1.substr(2,7));//it will include the start index as well as end index
   //length count from the starting index.

   // // tolowercase
   // let course2="WelComeToJavaClasses";//it will be convert capital letter to small letter
   // console.log(course2.toLowerCase());

   // // touppercase
   // let course3="welcometojavaclasses";//it will be convert small letter to capital letter
   // console.log(course3.toUpperCase());
   
//    // toLocaleUpperCase
//    let course4="welcometojavaclasses";
//    console.log(course4.toLocaleUpperCase());
   

//    // tolocallowercase
//    let course5="welcometojavaclasses";
//    console.log(course5.toLocaleLowerCase());

//    // concat the strings.

//   let stry="ABCD";
//   let cource5="mnop";
//    console.log(stry.concat(cource5).toUpperCase());
//    console.log(stry);

// //  trim() remove space
//       //start spaced      end space
// let mess="         sanika         ";
// console.log(mess+"hello");//count space
// console.log(mess.trim()+"hi");//remove space
// console.log(mess.trimEnd()+"hello");//remove the end space
// console.log(mess.trimStart()+"hello");//remove the start space

// //pad() add space

// let miss11="pratiksha";
// console.log(miss11+"hi");
// console.log(miss11.padEnd());//Adds extra characters to the end of a string until it reaches the specified length.
// console.log(miss11.padStart(20,"#"));//adds characters to the start of a string until it reaches a given length.

// // repeat()
// // repeat it will repeat the same string again and again
// let same="mynameis";
// console.log(same.repeat(3));
// console.log(same.repeat(2));

// // split()
// let str="qwer7tyu         *ios7df*ghjx7c*vbnm7e*rt*yu7iosdfghj";
// console.log(str.split("7"));//it will split the string with seven
// console.log(str.split(""));//it will split each element of the string and gives array
// console.log(str.split("*"));// it will split/ break string with star
// console.log(str.split("     "));// it will break the string into parts between doubble space











   
   
   
   
   

