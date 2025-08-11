"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    print_type() {
        console.log(this.type);
    }
}
class PartimeJob extends Job {
    working_hour;
    constructor(working_hour, type) {
        super(type);
        this.working_hour = working_hour;
    }
    calculateSalary() {
        console.log(`${(this.working_hour * 30000).toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND"
        })}`);
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        console.log(`${(10000000).toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        })}`);
    }
}
let partime_job = new PartimeJob(4, "Tay chân");
let fulltime_job = new FulltimeJob("Giấy tờ");
partime_job.calculateSalary();
fulltime_job.calculateSalary();
//# sourceMappingURL=baitap2.js.map