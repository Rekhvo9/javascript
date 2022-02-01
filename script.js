// task 1//


let user = {
    firstName: 'Zura',
    lastName: "Rekhviashvili",
    age: 23,
    studentstatus: 'Active'
};

console.log(user.studentstatus);



// task 2//
let userNames = ['giorgi', 'ani', 'nika', 'toka'];

for (let i = 0; i < userNames.length; i++) {
    console.log(userNames[i]);
}

let item = 0;
while (item < userNames.length) {
    console.log(userNames[item]);
    item++
}


//task 3//

let numbers = [3,8,13,27,83,86,87,9,98];

for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] > 5) {
        console.log(numbers[x]);
    }
}


//task 4//

let users = [
    { username: 'test1', status: false },
    { username: 'test2', status: false },
    { username: 'test3', status: true }
];

for (let y = 0; y < users.length; y++) {
    if (users[y].status === true) {
        console.log(users[y]);
    }
}

//task 5 //

let newUser = {
    name: 'Zuraa',
    age: 23,
    studentstatus: 'active'
}

if (newUser.age > 18 && newUser.studentstatus === 'active') {
    console.log("HELLO");
}

if (newUser.name === 'Zuraa') {
    console.log("Hello Zura");
}

if (newUser.studentstatus === "active" || newUser.age < 23) {
    console.log("Hello World");
} else {
    console.log("ERROR");
}
// task 6//

let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
for (let newItem = 0; newItem < array.length; newItem++) {
    if (typeof array[newItem] === "string") {
        console.log(array[newItem]);
    }
}