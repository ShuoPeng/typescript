class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");
console.log(accounting);

const accountingCopy = { describe: accounting.describe , name: 'test'};

accounting.describe();
accountingCopy.describe();
