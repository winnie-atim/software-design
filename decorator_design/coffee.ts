// defining the component interface
interface Coffee {
    cost(): number;
    description(): string;
}

//Implementing the Concrete Component
class SimpleCoffee implements Coffee {
    cost(): number {
        return 5.0;
    }

    description(): string {
        return "Simple Coffee";
    }
}

//Implementing the Decorator
class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost();
    }

    description(): string {
        return this.coffee.description();
    }
}

//Implementing Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 1.5;
    }

    description(): string {
        return `${this.coffee.description()} + Milk`;
    }
}

class SugarDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost(): number {
        return this.coffee.cost() + 0.5;
    }

    description(): string {
        return `${this.coffee.description()} + Sugar`;
    }
}

//use the Decorators
// Create a Simple Coffee
let simpleCoffee = new SimpleCoffee();

console.log(simpleCoffee.description());  // Output: Simple Coffee
console.log(simpleCoffee.cost());         // Output: 5.0

// Decorate it with Milk
simpleCoffee = new MilkDecorator(simpleCoffee);

console.log(simpleCoffee.description());  // Output: Simple Coffee, Milk
console.log(simpleCoffee.cost());         // Output: 6.5

// Decorate it with Sugar
simpleCoffee = new SugarDecorator(simpleCoffee);

console.log(simpleCoffee.description());  // Output: Simple Coffee, Milk, Sugar
console.log(simpleCoffee.cost());         // Output: 7.0