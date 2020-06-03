// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Shuo",
//   age: 32,
// };

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
  name: "Shuo",
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

person.role = [1, 'haa'];
person.role.push('asd');// push is an expection here;

let favoriteActivities: (string | number)[];
// or : any [];
favoriteActivities = ['Sports', 32];

const a = [1, 2, 3];

console.log(typeof a);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); 
    // will get an error, and it's good;
}