// function changeText() {
//     document.getElementById("myH1").textContent = 'Hello';
// }

// let students=30;

// students = students + 1;
// students = students - 1;
//  students = students *2;
//  students = students /2
// students = students** 2;
// let extraStudents = students % 3;
// console.log(extraStudents);

// students-=2;
// console.log(students);

// students+=7;
// console.log(students);

// students/=2;
// console.log(students);

// How to accept user input
// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY =HTML textbox

// let username;
// document.getElementById("myButton").onclick=function(){
//     username=document.getElementById("myText").value;
//     document.getElementById("myWelcome").textContent = `Hello ${username}`;

//     console.log(username);
// }

// constructor, operatior "new"

/*onstructor, operator "new"
The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator.

Constructor function
Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.

/*/
// function User(name){
//     this.name =name;
//     this.isAdmin= false;
// }

// let user = new User("jack");


// alert(user.name);
// alert(user.isAdmin);

// in order words, new User(...) does something like:

// function User(name){
    // this = {};(implicity)
// add properties to this
// this.name = name;
// this.isAdmin= false;

// return this;(implicity)
// }

// so let user = new user("jack") gives the same result as;

// let user = {
//     name: "jack",
//     isAdmin: false
// };

/*ow if we want to create other users, we can call new User("Ann"), new User("Alice") 
and so on. Much shorter than using literals every time, and also easy to read./*/




const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countlabel = document.getElementById("countlabel");

let count=0;

increaseBtn.onclick= function() {
    count++;
    countlabel.textContent=count;
}

decreaseBtn.onclick=function(){
    count--;
    countlabel.textContent=count; 
}


resetBtn.onclick=function(){
    count=0;
    countlabel.textContent=count; 
} 