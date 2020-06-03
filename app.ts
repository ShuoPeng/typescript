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
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: (string | number)[];
// or : any [];
favoriteActivities = ['Sports', 32];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); 
    // will get an error, and it's good;
}