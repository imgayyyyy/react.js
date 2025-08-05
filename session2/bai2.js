function greetingWithWeather(name, weather){
    if(weather == `sunny`){
        console.log(` chao ${name}, hom nay nang dep`);
    }else if(weather == `rainy` ){
        console.log(`chao ${name},hom nay mua hay mang theo o`);
    }else{
        console.log(`chao ${name},hom nay thoi tiet khong xac dinh`);
    }
}

console.log(greetingWithWeather("huy","rainy"));