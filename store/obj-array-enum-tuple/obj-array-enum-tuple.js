"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Shuo",
//   age: 32,
// };
const person = {
    name: "Shuo",
    age: 32,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
person.role = [1, "haa"];
person.role.push("asd"); // push is an expection here;
let favoriteActivities;
// or : any [];
favoriteActivities = ["Sports", 32];
const a = [1, 2, 3];
console.log(typeof a);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
    // will get an error, and it's good;
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["STUDENT"] = 1] = "STUDENT";
    Role[Role["TEACHER"] = 2] = "TEACHER";
})(Role || (Role = {}));
const person2 = {
    role: Role.ADMIN
};
console.log(Role);
console.log(person2.role === Role.TEACHER);
