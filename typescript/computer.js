var KeyBoard = /** @class */ (function () {
    function KeyBoard() {
    }
    KeyBoard.prototype.input = function () {
        console.log("Inputing data from a keyboard...");
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
var Computer = /** @class */ (function () {
    function Computer() {
        this.keyboard = new KeyBoard();
        this.mouse = new Mouse();
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
    return Computer;
}());
// Computer Object
var computer = new Computer();
// Testing computer functionality
computer.input();
// computer.storeDataToInternalMemory();
// computer.retrieveDataFromInternalMemory();
// computer.processDataUsingCpu();
// computer.outputDataOnBuiltinScreen();
// computer.connectToWiFi();
// computer.connectToBluetooth();
