console.log('Hello SMIT CLASS -2 Typescript');

/// object in array


// simple object Method 1
let data1 = {
    product:'Laptop',
    brand:'lenovo',
    model:'x240',
    proce: 24000,
    status:true,
    specs:['8gb ram','500gb Hdd', '256gb ssd','wifi','front_camera','backlight keyboard']
}
console.log(data1);
data1.specs.push('Black');
console.log(data1)


// Custom object / type oject

// creating custom type ( myobj)
type myobj = {
    name:string;
    age:number;
    city:string;
    status:boolean
}

let data2 : myobj = {
    name:'Abi Ali Khokhar',
    age:25,
    city:'Karachi',
    status:true
}
// if you hover on data2 .you will see its type (myobj)
// console.log(myobj) // can't console becasue it is not a value its a type:
console.log(data2)


//
const datas:myobj[] = [];
datas.push({
    name:'Sohail',
    age:32,
    city:'Hyderabad',
    status:false
});
console.log(datas);
//

////////////////////////////////////////////////////////////////////////////////////////

// making value optional ?
type myschool  = {
    name:string;
    age:number;
    city:string;

}


let students : myschool [] = [];
students.push({
    name:'Zahid Parvez',
    age:48,
    city:'Hyderabad',

})

///////////////////////////////////////////////////////////////////////////////////

///  making value optinal ?  / or Emprty " ";

type user ={
    name:string;
    age:number;
    city:string;
    country?:string // optional ?
}
//here key country is oprinal . we can check by removing ?

let newUser :user = {
    name:'Irfan Ali',
    age:27,
    city:" ",  // empty for now I dont know his city, I will add it later.
    country:'Pakistan'
}
// if you haven't got data for now so can make as an empty 
newUser.city = 'Quetta' // adding city now;

console.log(newUser)


















// let p1 = prompt('Enter your name');
// let p2 = prompt('Enter your age');
// let p3 = prompt('Enter your city');
// //prompt('Enter your status True/ false');
//  students.push({
//     name: p1,
//     age: p2,
//     city: p3
//  })
// console.log(students);







// function start() {
//     type myschool  = {
//         name:string;
//         age:number;
//         city:string;
//     }
    
//     let students : myschool[]= [] ;
    
//     let p1 = prompt('Enter your name');
//     let p2 = prompt('Enter your age');
//     let p3 = prompt('Enter your city');
//     //prompt('Enter your status True/ false');
//     //  students.push({
//     //     name: p1,
//     //     age: p2,
//     //     city: p3
//     //  })
//     // document.write(students)t
//     type pp1 = p1;
    

//     students.push({

//     })

// }
