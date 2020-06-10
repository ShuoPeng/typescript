"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
const accountingCopy = { describe: accounting.describe, name: 'test' };
accounting.describe();
// accountingCopy.describe();
accounting.addEmployee('Frank');
accounting.addEmployee('Juan');
accounting.employees[2] = 'Rajeev';
accounting.printEmployees();
console.log(accounting.employees);
