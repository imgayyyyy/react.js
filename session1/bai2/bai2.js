const a=5;
const arr = [1,2,3];

// a=2;
arr.push(4);
console.log(a);
console.log(arr);

/*
thêm vào mảng ko bị lỗi vì const kiểu mảng cho phép thay đổi nội dung, miễn là ko gán lại toàn bộ mảng
thay đổi giá trị của biến bị lỗi vì const là khai báo biến hằng
 */