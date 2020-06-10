// function Logger(constructor: Function){
//     console.log('Logging...');
//     console.log(constructor);
// }

// @Logger
// class Person {
//     constructor(public name: string) {
//         console.log('Creating person object');
//     }
// }

// const p1 = new Person('Shuo');
// const p2 = new Person('Jason');

// console.log(p1);
// console.log(p2);

function WithTemplate(parentId: string) {
  return function (constructor: any) {
    const parentEl = document.getElementById(parentId);
    const c = new constructor('asdwdwqd');
    if (parentEl) {
      console.log(c.name);
      parentEl.innerHTML = c.name;
    }
  };
}

@WithTemplate("app")
class Component {
  name: string = "naananana";

  constructor(name: string) {
    this.name = name;
  }
}

const c1 = new Component("111");
const c2 = new Component("222");

console.log(c1);
console.log(c2);
