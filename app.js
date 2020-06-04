// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Shuo",
//   age: 32,
// };
var person = {
    name: "Shuo",
    age: 32,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
person.role = [1, "haa"];
person.role.push("asd"); // push is an expection here;
var favoriteActivities;
// or : any [];
favoriteActivities = ["Sports", 32];
var a = [1, 2, 3];
console.log(typeof a);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
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
var person2 = {
    role: Role.ADMIN
};
console.log(Role);
console.log(person2.role === 0);
