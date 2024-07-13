// Define classes implementing interfaces
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.input = function () {
        return "Keyboard input";
    };
    return Keyboard;
}());
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.input = function () {
        return "Mouse input";
    };
    return Mouse;
}());
var SSD = /** @class */ (function () {
    function SSD() {
    }
    SSD.prototype.store = function () {
        return "SSD storing data";
    };
    SSD.prototype.retrieve = function () {
        return "SSD retrieving data";
    };
    return SSD;
}());
var HDD = /** @class */ (function () {
    function HDD() {
    }
    HDD.prototype.store = function () {
        return "HDD storing data";
    };
    HDD.prototype.retrieve = function () {
        return "HDD retrieving data";
    };
    return HDD;
}());
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.process = function () {
        return "CPU processing data";
    };
    return CPU;
}());
var GPU = /** @class */ (function () {
    function GPU() {
    }
    GPU.prototype.process = function () {
        return "GPU processing data";
    };
    return GPU;
}());
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.output = function () {
        return "Monitor output";
    };
    return Monitor;
}());
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.output = function () {
        return "Printer output";
    };
    return Printer;
}());
// WiFi & Bluetooth classes
var WiFi = /** @class */ (function () {
    function WiFi() {
    }
    WiFi.prototype.connect = function () {
        return "WiFi connected";
    };
    WiFi.prototype.disconnect = function () {
        return "WiFi disconnected";
    };
    return WiFi;
}());
var Bluetooth = /** @class */ (function () {
    function Bluetooth() {
    }
    Bluetooth.prototype.connect = function () {
        return "Bluetooth connected";
    };
    Bluetooth.prototype.disconnect = function () {
        return "Bluetooth disconnected";
    };
    return Bluetooth;
}());
// Define Computer class
var Computer = /** @class */ (function () {
    function Computer(inputDevice, storageDevice, processingDevice, outputDevice, wifi, bluetooth) {
        this._inputDevice = inputDevice;
        this._storageDevice = storageDevice;
        this._processingDevice = processingDevice;
        this._outputDevice = outputDevice;
        this._wifi = wifi;
        this._bluetooth = bluetooth;
    }
    Computer.prototype.setInputDevice = function (device) {
        this._inputDevice = device;
    };
    Computer.prototype.setStorageDevice = function (device) {
        this._storageDevice = device;
    };
    Computer.prototype.setProcessingDevice = function (device) {
        this._processingDevice = device;
    };
    Computer.prototype.setOutputDevice = function (device) {
        this._outputDevice = device;
    };
    Computer.prototype.setWiFi = function (wifi) {
        this._wifi = wifi;
    };
    Computer.prototype.setBluetooth = function (bt) {
        this._bluetooth = bt;
    };
    Computer.prototype.performInput = function () {
        return this._inputDevice.input();
    };
    Computer.prototype.performStorage = function () {
        return this._storageDevice.store() + " and " + this._storageDevice.retrieve();
    };
    Computer.prototype.performProcessing = function () {
        return this._processingDevice.process();
    };
    Computer.prototype.performOutput = function () {
        return this._outputDevice.output();
    };
    Computer.prototype.connectWiFi = function () {
        if (this._wifi) {
            return this._wifi.connect();
        }
        return "No WiFi support";
    };
    Computer.prototype.connectBluetooth = function () {
        if (this._bluetooth) {
            return this._bluetooth.connect();
        }
        return "No Bluetooth support";
    };
    return Computer;
}());
// Example usage
var keyboard = new Keyboard();
var mouse = new Mouse();
var ssd = new SSD();
var cpu = new CPU();
var monitor = new Monitor();
var wifi = new WiFi();
var bluetooth = new Bluetooth();
var computer = new Computer(keyboard, ssd, cpu, monitor, wifi, bluetooth);
console.log(computer.performInput()); // Outputs: Keyboard input
console.log(computer.performStorage()); // Outputs: SSD storing data and SSD retrieving data
console.log(computer.performProcessing()); // Outputs: CPU processing data
console.log(computer.performOutput()); // Outputs: Monitor output
console.log(computer.connectWiFi()); // Outputs: WiFi connected
console.log(computer.connectBluetooth()); // Outputs: Bluetooth connected
// Change the input device
computer.setInputDevice(mouse);
console.log(computer.performInput()); // Outputs: Mouse input
// Create a computer without WiFi and Bluetooth support
var basicComputer = new Computer(keyboard, ssd, cpu, monitor);
console.log(basicComputer.connectWiFi()); // Outputs: No WiFi support
console.log(basicComputer.connectBluetooth()); // Outputs: No Bluetooth support
