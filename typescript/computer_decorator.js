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
// BasicComputer class implementing the Computer interface
var BasicComputer = /** @class */ (function () {
    function BasicComputer() {
    }
    BasicComputer.prototype.cost = function () {
        return 1000; // base cost of the computer
    };
    BasicComputer.prototype.description = function () {
        return 'Basic Computer';
    };
    return BasicComputer;
}());
// Abstract decorator class implementing the Computer interface
var ComputerDecorator = /** @class */ (function () {
    function ComputerDecorator(computer) {
        this.computer = computer;
    }
    return ComputerDecorator;
}());
// Concrete decorator for Pluggable Mouse
var PluggableMouseDecorator = /** @class */ (function (_super) {
    __extends(PluggableMouseDecorator, _super);
    function PluggableMouseDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PluggableMouseDecorator.prototype.cost = function () {
        return this.computer.cost() + 50; // additional cost of the pluggable mouse
    };
    PluggableMouseDecorator.prototype.description = function () {
        return this.computer.description() + ', Pluggable Mouse';
    };
    return PluggableMouseDecorator;
}(ComputerDecorator));
// Concrete decorator for External Keyboard
var ExternalKeyboardDecorator = /** @class */ (function (_super) {
    __extends(ExternalKeyboardDecorator, _super);
    function ExternalKeyboardDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExternalKeyboardDecorator.prototype.cost = function () {
        return this.computer.cost() + 80; // additional cost of the external keyboard
    };
    ExternalKeyboardDecorator.prototype.description = function () {
        return this.computer.description() + ', External Keyboard';
    };
    return ExternalKeyboardDecorator;
}(ComputerDecorator));
// Concrete decorator for Wireless Mouse
var WirelessMouseDecorator = /** @class */ (function (_super) {
    __extends(WirelessMouseDecorator, _super);
    function WirelessMouseDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WirelessMouseDecorator.prototype.cost = function () {
        return this.computer.cost() + 70; // additional cost of the wireless mouse
    };
    WirelessMouseDecorator.prototype.description = function () {
        return this.computer.description() + ', Wireless Mouse';
    };
    return WirelessMouseDecorator;
}(ComputerDecorator));
// Concrete decorator for External Storage Device
var ExternalStorageDecorator = /** @class */ (function (_super) {
    __extends(ExternalStorageDecorator, _super);
    function ExternalStorageDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExternalStorageDecorator.prototype.cost = function () {
        return this.computer.cost() + 100; // additional cost of the external storage device
    };
    ExternalStorageDecorator.prototype.description = function () {
        return this.computer.description() + ', External Storage Device';
    };
    return ExternalStorageDecorator;
}(ComputerDecorator));
// Concrete decorator for Bluetooth Supported Headsets
var BluetoothHeadsetsDecorator = /** @class */ (function (_super) {
    __extends(BluetoothHeadsetsDecorator, _super);
    function BluetoothHeadsetsDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BluetoothHeadsetsDecorator.prototype.cost = function () {
        return this.computer.cost() + 150; // additional cost of the Bluetooth supported headsets
    };
    BluetoothHeadsetsDecorator.prototype.description = function () {
        return this.computer.description() + ', Bluetooth Supported Headsets';
    };
    return BluetoothHeadsetsDecorator;
}(ComputerDecorator));
// Usage example
var myComputer = new BasicComputer();
console.log(myComputer.description() + ' costs $' + myComputer.cost());
myComputer = new PluggableMouseDecorator(myComputer);
console.log(myComputer.description() + ' costs $' + myComputer.cost());
myComputer = new ExternalKeyboardDecorator(myComputer);
console.log(myComputer.description() + ' costs $' + myComputer.cost());
myComputer = new WirelessMouseDecorator(myComputer);
console.log(myComputer.description() + ' costs $' + myComputer.cost());
myComputer = new ExternalStorageDecorator(myComputer);
console.log(myComputer.description() + ' costs $' + myComputer.cost());
myComputer = new BluetoothHeadsetsDecorator(myComputer);
console.log(myComputer.description() + ' costs $' + myComputer.cost());
