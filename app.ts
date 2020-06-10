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


// class Product {
//   private isListed: boolean;

//   constructor(public readonly name: string, private price: number) {
//     this.isListed = true;
//   }
// }

// const iphone = new Product('iPhone', 599);

// console.log(iphone.name);
// console.log(iphone);