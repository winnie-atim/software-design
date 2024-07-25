// Interface for Computer
interface Computer {
    cost(): number;
    description(): string;
}

// BasicComputer class implementing the Computer interface
class BasicComputer implements Computer {
    cost(): number {
        return 1000; // base cost of the computer
    }

    description(): string {
        return 'Basic Computer';
    }
}

// Abstract decorator class implementing the Computer interface
abstract class ComputerDecorator implements Computer {
    protected computer: Computer;

    constructor(computer: Computer) {
        this.computer = computer;
    }

    abstract cost(): number;
    abstract description(): string;
}

// Concrete decorator for Pluggable Mouse
class PluggableMouseDecorator extends ComputerDecorator {
    cost(): number {
        return this.computer.cost() + 50; // additional cost of the pluggable mouse
    }

    description(): string {
        return this.computer.description() + ', Pluggable Mouse';
    }
}

// Concrete decorator for External Keyboard
class ExternalKeyboardDecorator extends ComputerDecorator {
    cost(): number {
        return this.computer.cost() + 80; // additional cost of the external keyboard
    }

    description(): string {
        return this.computer.description() + ', External Keyboard';
    }
}

// Concrete decorator for Wireless Mouse
class WirelessMouseDecorator extends ComputerDecorator {
    cost(): number {
        return this.computer.cost() + 70; // additional cost of the wireless mouse
    }

    description(): string {
        return this.computer.description() + ', Wireless Mouse';
    }
}

// Concrete decorator for External Storage Device
class ExternalStorageDecorator extends ComputerDecorator {
    cost(): number {
        return this.computer.cost() + 100; // additional cost of the external storage device
    }

    description(): string {
        return this.computer.description() + ', External Storage Device';
    }
}

// Concrete decorator for Bluetooth Supported Headsets
class BluetoothHeadsetsDecorator extends ComputerDecorator {
    cost(): number {
        return this.computer.cost() + 150; // additional cost of the Bluetooth supported headsets
    }

    description(): string {
        return this.computer.description() + ', Bluetooth Supported Headsets';
    }
}

// Usage example
let myComputer: Computer = new BasicComputer();
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