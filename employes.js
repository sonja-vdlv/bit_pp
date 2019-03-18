function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.fullName = function () {
    return this.name + " " + this.surname;
}



function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype.getData = function () {
    return Person.call(this, name, surname) + " " + this.salary;

}

Employee.prototype.getSalary = function () {
    return this.salary;
}
Employee.prototype.increaseSalary = function () {
    return this.salary = (this.salary * 0.1) + this.salary;
}

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary, specialization)
    this.specialization = specialization;
}
Developer.prototype.getSpecialization = function () {
    return this.specialization;
}



function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype.getDepartment = function () {
    return this.department;
}
Manager.prototype.changeDepartment = function (newDepartment) {
    return this.department = newDepartment;
}


var sonja = new Person('sonja', 'vadleve');
console.log(sonja);

var mika = new Employee('mika', 'mikic', 'prodavac', 25000);
console.log(mika);

console.log(mika.increaseSalary());