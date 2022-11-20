class Employee {
  #ID;
  #Department;
  #Salary_Properties;

  constructor(_ID, _Department) {
    this.#ID = _ID;
    this.#Department = _Department;
  }
  setID(_ID) {
    this.#ID = _ID;
  }
  setDepartment(_Department) {
    this.#Department = _Department;
  }
  setSalary_Properties(_Salary_Properties) {
    this.#Salary_Properties = _Salary_Properties;
  }
  getID() {
    return this.#ID;
  }
  getDepartment() {
    return this.#Department;
  }
  getSalary_Properties() {
    return this.#Salary_Properties;
  }
  DisplayFunc() {
    console.log(
      "\n********************\nID : ",
      this.getID(),
      "\nDepartment : ",
      this.getDepartment(),
      "\nSalary Properties : ",
      this.getSalary_Properties()
    );
  }
}

let test1 = new Employee(0001, "Development");
test1.setSalary_Properties("Weekly Bases");
test1.DisplayFunc();

let test2 = new Employee(0005, "Marketing");
test2.setSalary_Properties("Monthly Bases");
test2.DisplayFunc();

let test3 = new Employee(0009, "Social Media / Admin");
test3.setSalary_Properties("Daily Bases");
test3.DisplayFunc();
