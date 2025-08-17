// // array functions(modifying array functions)
// // pop()

// // let num=[12,22,33,134,30,50];
// // console.log(num);
// // let num1=num.pop();
// // console.log(num1);
// // console.log(num);

// // // push()

// // let num3=[50,90,70,60,300,20];
// // console.log(num3);
// // let num4=num3.push(10);
// // console.log(num4);
// // console.log(num3);

// // // shift()

// // let dum=[45,79,89,78,90,67,78];
// // console.log(dum);
// // let dum1=dum.shift();
// // console.log("remoed element from the dum array" + (dum1));
// // console.log(dum);


// // // unshift()

// // let dum2=[56,67,78,90,75,43];
// // console.log(dum2);
// // let dum3=dum2.unshift(11);
// // console.log(dum3);
// // console.log(dum2);

// // // foreach()

// // let array=[10,20,30,40,50,60,70];
// // function addeven(num)
// // {
// //     if(num%2==0)
// //     {
// //         console.log(array);
        
// //     }
// // }
// // addeven(11);
// // addeven(22);


// //map()

// // function double(num)
// // {
// //     return(num*2);
// // }
// // let nump=number2.map(double);
// // console.log(nump);



// // var numbers = [1, 2, 3, 4];
// // function num()
// //  {
// //   console.log(num * 2);
// // };

// // numbers.forEach(num)
// // console.log(numbers);

// // function num()
// //  {
// //   console.log(num * 2);
// // };


// let num=[11,22,33,19,48];

// function mult(num)
// {
//     console.log(num*2);
// }

// let num1=[66,55,282,9023,356,26];
// function oddeven(num1)
// {
//     if(num1%2==0)
//     {
//         console.log(num1 + "even numbers")
//     }
//     else{
//         console.log(num1 + "odd numbers");
        
//     }
// }

// num1.forEach(oddeven);
// // num.forEach(mult);
// console.log(num);
// console.log(num1);


// filter()

// let num=[10,20,30,40,50,60,70];

// function double(num)
// {
//     if(num>30)
//         {
//     return(num);
//     }
// }
// let num3=num.filter(double);
// console.log(num3);


// let age=[20,30,40,18,13,12,18,23];

// function check(age)
// {
//     if(age>=18)
//     {
//         return(age*2);
//      }
// }

// let update=age.filter(check);
// console.log(age );

// console.log(update);

// join function


// let array1=[10,48,89,80,80,];
// console.log(array1.join());
// console.log(array1.join(""));
// console.log(array1.join("      "));
// console.log(array1.join("***"));
// console.log(array1.join("@");


// flat()

// let array=[10,20,30,[40,50,[58,70,[58,50,[68,[20,40],68,],59,40],80,47],60,47],60];

// console.log(array.flat(3));
// console.log(array.flat(Infinity));

// includes

// let array1=['a','b','c','d','e'];
// console.log(array1.includes('f'));
// console.log(array1.includes('c'));
// console.log(array1.includes(1));

// slice(2
// let array2=['a','b','c','d','e','s','g','y','d','r'];
// let array=array2.slice(2,-2);
// let array3=array2.slice(-4,-2);


// console.log(array );
// console.log(array3);

// splice

// let num=['s','d','f','g','e','w','q','j','o','h','f','r','w'];
// num.splice(-8,4,'sushant');
// console.log(num);

// let a=['a','s','f','u','h','j'];
// let b=a.slice(-3,3);
// console.log(b);


// // every()

// let array=[90,20,30,40,10,60];
// function age(num)
// {
//     return num>20;
    
// }
// let arr=array.every(age);
// console.log(arr);
// console.log(array);




// let marks=[100,200,300,400,500,600];
// function mark(num)
// {
//     return num<50;
    
// }

// let check=marks.every(mark);
// console.log(check);


// let arr=[11,23,45,32,21,12];
// function check(num)
// {
//     console.log(num>15);
    
// }
// arr.every(check);




// *******************************************************************


// some()


// let array=[10,10,20,30];
// function check(num)
// {
//     return(num>10);
    
// }
// console.log(array.some(check));





// let arr=[10,20,23,26,30];
// function check(num)
// {
//  return(num>=30);

// }

//     console.log(arr.some(check));
    

let arr=[10,20,30,40,50];
function total(num1,num2)
{
    num=num1+num2
    return num;
}
console.log(arr.reduce(total));
















