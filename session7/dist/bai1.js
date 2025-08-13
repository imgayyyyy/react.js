"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    ;
    printfInfo() {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printfInfo() {
        super.printfInfo();
        console.log(this.teamSize);
    }
}
const employee = new Employee("thành ngu", "lừa đảo", 12345);
employee.printfInfo();
console.log("-------");
const manager = new Manager("huy khôn", "học bá", 987654, 10);
manager.printfInfo();
//# sourceMappingURL=bai1.js.map