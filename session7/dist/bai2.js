"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    speedPin;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
        this.speedPin = speed;
    }
    slowDown() {
        this.speed = this.speedPin - 20;
        console.log(`tốc độ thấp nhất ${this.speed}`);
    }
    speedUp() {
        this.speed = this.speedPin + 20;
        console.log(`tốc độ cao nhất ${this.speed}`);
    }
    showSpeed() {
        console.log(`toc do hien tai ${this.speedPin}`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(this.name);
        console.log(`${this.speedPin} km/h`);
        console.log(`xe số ${this.id}`);
        console.log(`biển số ${this.gear}`);
    }
}
const vehicle = new Bicycle("xe rồng", 100, 1, 36);
vehicle.showSpeed();
console.log("------");
vehicle.slowDown();
vehicle.speedUp();
console.log("------");
vehicle.showInfo();
//# sourceMappingURL=bai2.js.map