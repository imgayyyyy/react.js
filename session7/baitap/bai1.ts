class Employee{
    name: string;
    protected company: string;
    private phone: number;
    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    };
    printfInfo(): void{
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}
class Manager extends Employee{
    teamSize: number;
    constructor(name: string, company: string, phone: number, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printfInfo(): void {
        super.printfInfo();
        console.log(this.teamSize);
    }
}

const employee = new Employee("thành ngu", "lừa đảo", 12345);
employee.printfInfo();

console.log("-------");

const manager = new Manager("huy khôn", "học bá", 987654,10);
manager.printfInfo();