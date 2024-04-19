abstract class Shape {
  x: number;
  y: number;
  color: string;

  constructor(source: Shape) {
    this.x = source.x;
    this.y = source.y;
    this.color = source.color;
  }

  abstract clone(): Shape;

  abstract area(): number;

  abstract perimeter(): number;
}

class Circle extends Shape {
  r: number;

  constructor(source: Circle) {
    super(source);
    this.r = source.r;
  }

  clone(): Circle {
    return new Circle(this);
  }

  area(): number {
    return Math.PI * Math.pow(this.r, 2);
  }

  perimeter(): number {
    return 2*this.r*Math.PI
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(source: Rectangle) {
    super(source);
    this.width = source.width;
    this.height = source.height;
  }

  clone(): Rectangle {
    return new Rectangle(this);
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return (this.width+this.height)*2
  }
}

const originCircle = new Circle({
  x: 10,
  y: 20,
  r: 10,
  color: 'Blue',
} as Circle);

const cloneCircle = originCircle.clone();

console.log(originCircle.area());
console.log(cloneCircle.area());
