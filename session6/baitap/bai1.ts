abstract class shape{
    name: string
    constructor(name: string) {
        this.name = name
    }
    getName(): string{
        return this.name
    }
    abstract getSize():void
}

class Rectangle extends shape{
    width: number
    height: number
    constructor(name:string ,width: number, height: number) {
        super(name)
        this.width = width
        this.height = height
    }   
    getSize(): void {
        console.log(`Width: ${this.width}, Height: ${this.height}`)
    }
}

const rectangle = new Rectangle("Hình chữ nhật", 5, 10);
console.log(rectangle.getName());
rectangle.getSize();
