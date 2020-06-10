class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
const accountingCopy = { describe: accounting.describe , name: 'test'};

accounting.describe();
// accountingCopy.describe();

accounting.addEmployee('Frank');
accounting.addEmployee('Juan');

//accounting.employees[2] = 'Rajeev';

accounting.printEmployees();