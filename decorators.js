"use strict";
// function Logger(constructor: Function){
//     console.log('Logging...');
//     console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function WithTemplate(parentId) {
    return function (constructor) {
        const parentEl = document.getElementById(parentId);
        const c = new constructor('asdwdwqd');
        if (parentEl) {
            console.log(c.name);
            parentEl.innerHTML = c.name;
        }
    };
}
let Component = /** @class */ (() => {
    let Component = class Component {
        constructor(name) {
            this.name = "naananana";
            this.name = name;
        }
    };
    Component = __decorate([
        WithTemplate("app")
    ], Component);
    return Component;
})();
const c1 = new Component("111");
const c2 = new Component("222");
console.log(c1);
console.log(c2);
