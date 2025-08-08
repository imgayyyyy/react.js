"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFinalPrice(product) {
    if (product.discount) {
        return product.price * (1 - product.discount);
    }
    return product.price;
}
function printProductInfo(product) {
    const finalPrice = getFinalPrice(product);
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
    console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VND`);
    console.log(`Danh mục: ${product.category.name}`);
}
const listProduct = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        discount: 0.2,
        category: {
            id: "C01",
            name: "Thời trang nam"
        }
    },
    {
        id: "P002",
        name: "Quần jeans",
        price: 500000,
        category: {
            id: "C01",
            name: "Thời trang nam"
        }
    },
    {
        id: "P003",
        name: "Váy hoa",
        price: 450000,
        discount: 0.1,
        category: {
            id: "C02",
            name: "Thời trang nữ"
        }
    }
];
for (let product of listProduct) {
    printProductInfo(product);
    console.log('---');
}
//# sourceMappingURL=bai6.js.map