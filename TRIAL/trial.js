// indicates the purpose of each component
var KeyBoard = /** @class */ (function () {
    function KeyBoard() {
    }
    KeyBoard.prototype.input = function () {
        console.log("Inputing data using a keyboard...");
    };
    return KeyBoard;
}());
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.input = function () {
        console.log("Inputing data using Mouse...");
    };
    return Mouse;
}());
var Projector = /** @class */ (function () {
    function Projector() {
    }
    Projector.prototype.output = function () {
        console.log("Outputing data from a projector...");
    };
    return Projector;
}());
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.output = function () {
        console.log("Outputing data from a printer...");
    };
    return Printer;
}());
var Processor = /** @class */ (function () {
    function Processor() {
    }
    Processor.prototype.processing = function () {
        console.log("Processing data using CPU...");
    };
    return Processor;
}());
var WiFi = /** @class */ (function () {
    function WiFi() {
    }
    WiFi.prototype.Connecting = function () {
        console.log("Connection to WiFi...");
    };
    return WiFi;
}());
var Bluetooth = /** @class */ (function () {
    function Bluetooth() {
    }
    Bluetooth.prototype.wirelessConnection = function () {
        console.log("Connection to bluetooth...");
    };
    return Bluetooth;
}());
var Computer = /** @class */ (function () {
    function Computer() {
        this.keyboard = new KeyBoard();
        this.mouse = new Mouse();
        this.projector = new Projector();
        this.printer = new Printer();
        this.processor = new Processor();
        this.wifi = new WiFi();
        this.bluetooth = new Bluetooth();
        // storeDataToInternalMemory(){
        //     console.log("Storing data in internal memory...");
        // }
        // retrieveDataFromInternalMemory(){
        //     console.log("Retrieving data from internal memory ...");
        // }
        // processDataUsingCpu(){
        //     console.log("Processing data using CPU...");
        // }
        // outputDataOnBuiltinScreen(){
        //     console.log("Outputting data on the built-in screen...");
        // }
        // connectToWiFi(){
        //     console.log("Connection to WiFi...");
        // } 
        // connectToBluetooth(){
        //     console.log("Connection to Bluetooth...");
        // }
    }
    Computer.prototype.input = function () {
        this.keyboard.input();
        this.mouse.input();
    };
    Computer.prototype.output = function () {
        this.projector.output();
        this.printer.output();
    };
    Computer.prototype.processing = function () {
        this.processor.processing();
    };
    Computer.prototype.connecting = function () {
        this.wifi.Connecting();
    };
    Computer.prototype.wirelessConnection = function () {
        this.bluetooth.wirelessConnection();
    };
    return Computer;
}());
// Computer Object
var computer = new Computer();
// Testing computer functionality
computer.input();
computer.output();
computer.processing();
computer.connecting();
computer.wirelessConnection();
// computer.storeDataToInternalMemory();
// computer.retrieveDataFromInternalMemory();
// computer.processDataUsingCpu();
// computer.outputDataOnBuiltinScreen();
// computer.connectToWiFi();
// computer.connectToBluetooth();
