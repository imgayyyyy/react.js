class Vehicle{
    protected name: string;
    protected speed: number;
    protected id: number;
    protected speedPin: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
        this.speedPin = speed;
    }
    slowDown(): void{
        this.speed = this.speedPin - 20;
        console.log(`tốc độ thấp nhất ${this.speed}`);
        
    }
    speedUp(): void{
        this.speed = this.speedPin + 20;
        console.log(`tốc độ cao nhất ${this.speed}`);
        
    }
    showSpeed(): void{
        console.log(`toc do hien tai ${this.speedPin}`);
        
    }

}
class Bicycle extends Vehicle{
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo(): void{
        console.log(this.name);
        console.log(`${this.speedPin} km/h`);
        console.log(`xe số ${this.id}`);
        console.log(`biển số ${this.gear}`);
    }
}

const vehicle = new Bicycle("xe rồng", 100, 1,36);

vehicle.showSpeed();
console.log("------");
vehicle.slowDown();
vehicle.speedUp();
console.log("------");
vehicle.showInfo();