"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const vehicle1 = new Vehicle("exciter", 2020, "yamaha");
const vehicle2 = new Vehicle("cbr150rr", 2022, "honda");
console.log(`${vehicle1.name},${vehicle1.year}, ${vehicle1.company}`);
console.log(`${vehicle2.name},${vehicle2.year}, ${vehicle2.company}`);
//# sourceMappingURL=bai1.js.map