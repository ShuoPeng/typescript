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
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
// or : any [];
favoriteActivities = ['Sports', 32];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
