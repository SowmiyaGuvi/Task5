// Create a class circle to find its radius and circumference

class Circle {
    // Constructor with default values
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
    
    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    // Method to calculate the area of the circle
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    // Method to calculate the circumference of the circle
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle1 = new Circle();
const circle2 = new Circle(2.5);
const circle3 = new Circle(3.0, "blue");

console.log(circle1.toString());
console.log(circle2.toString());
console.log(circle3.toString());

console.log(circle1.getArea());
console.log(circle2.getCircumference()); 

circle3.setRadius(4.0);
circle3.setColor("green");

console.log(circle3.toString());
console.log(circle3.getArea()); 
console.log(circle3.getCircumference());