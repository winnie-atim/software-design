var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Implementing the Concrete Component
var SimpleCoffee = /** @class */ (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.cost = function () {
        return 5.0;
    };
    SimpleCoffee.prototype.description = function () {
        return "Simple Coffee";
    };
    return SimpleCoffee;
}());
//Implementing the Decorator
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(coffee) {
        this.coffee = coffee;
    }
    CoffeeDecorator.prototype.cost = function () {
        return this.coffee.cost();
    };
    CoffeeDecorator.prototype.description = function () {
        return this.coffee.description();
    };
    return CoffeeDecorator;
}());
//Implementing Concrete Decorators
var MilkDecorator = /** @class */ (function (_super) {
    __extends(MilkDecorator, _super);
    function MilkDecorator(coffee) {
        return _super.call(this, coffee) || this;
    }
    MilkDecorator.prototype.cost = function () {
        return this.coffee.cost() + 1.5;
    };
    MilkDecorator.prototype.description = function () {
        return "".concat(this.coffee.description(), " + Milk");
    };
    return MilkDecorator;
}(CoffeeDecorator));
var SugarDecorator = /** @class */ (function (_super) {
    __extends(SugarDecorator, _super);
    function SugarDecorator(coffee) {
        return _super.call(this, coffee) || this;
    }
    SugarDecorator.prototype.cost = function () {
        return this.coffee.cost() + 0.5;
    };
    SugarDecorator.prototype.description = function () {
        return "".concat(this.coffee.description(), " + Sugar");
    };
    return SugarDecorator;
}(CoffeeDecorator));
//use the Decorators
// Create a Simple Coffee
var simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.description()); // Output: Simple Coffee
console.log(simpleCoffee.cost()); // Output: 5.0
// Decorate it with Milk
simpleCoffee = new MilkDecorator(simpleCoffee);
console.log(simpleCoffee.description()); // Output: Simple Coffee, Milk
console.log(simpleCoffee.cost()); // Output: 6.5
// Decorate it with Sugar
simpleCoffee = new SugarDecorator(simpleCoffee);
console.log(simpleCoffee.description()); // Output: Simple Coffee, Milk, Sugar
console.log(simpleCoffee.cost()); // Output: 7.0
