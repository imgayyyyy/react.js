"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}
const rectangle = new Rectangle("Hình chữ nhật", 5, 10);
console.log(rectangle.getName());
rectangle.getSize();
//# sourceMappingURL=bai1.js.map