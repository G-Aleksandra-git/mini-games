//Попробуйте создать объект user со свойствами name, age, city и методом объекта getInfo. 
//Метод должен возвращать информацию о пользователе в следующем формате: 
//«Пользователь name, возраст age, проживает в городе city».

const user = {
    name: 'Alex',
    age: 30,
    sity: 'Moscow',
    getInfo() {
        console.log(`Пользователь ${user.name}, возраст ${user.age}, проживает в г. ${user.sity}`);
    }
};
user.getInfo();

const user1 = {
    name: 'Джон',
    age: 45,
    city: 'Нью-Йорк',
    getInfo() {
        return `Пользователь ${user1.name}, возраст ${user1.age}, проживает в городе ${user1.city}`;
    }
};

console.log(user1.getInfo());
// "Пользователь Джон, возраст 45, проживает в городе Нью-Йорк"

//Создайте два объекта — square1 и square2, — которые будут содержать свойства width(«ширина») и 
//height («высота»). Объекты должны содержать метод getRectangleArea, который возвращает площадь прямоугольника, 
//а также метод getRectanglePerimeter, который возвращает периметр прямоугольника.

function getRectangleArea() { //площадь прямоугольника
    return `Площадь прямоугольника со сторонами ${this.width} и ${this.height} равна ${this.width * this.height}`;
}
function getRectanglePerimeter() { //периметр прямоугольника
    return `Периметр прямоугольника со сторонами ${this.width} и ${this.height} равен ${this.width * 2 + this.height * 2}`;
}

const square1 = {
    width: 20,
    height: 30,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}
const square2 = {
    width: 15,
    height: 46,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}
console.log(square1.getArea());
console.log(square1.getPerimeter());
console.log(square2.getArea());
console.log(square2.getPerimeter());


























































