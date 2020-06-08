"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
}
const accounting = new Department("Accounting");
console.log(accounting);
const accountingCopy = { describe: accounting.describe, name: 'test' };
accounting.describe();
accountingCopy.describe();
