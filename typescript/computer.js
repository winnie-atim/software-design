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
    function Computer(inputDevice) {
        this.name = "";
        this.inputDevice = inputDevice;
    }
    Computer.prototype.input = function () {
        this.inputDevice.input();
    };
    Computer.prototype.setInputDevice = function (inputDevice) {
        this.inputDevice = inputDevice;
    };
    return Computer;
}());
var keyboard = new KeyBoard();
var mouse = new Mouse();
var computer = new Computer(keyboard);
computer.input();
computer.setInputDevice(mouse);
computer.input();
computer.setInputDevice(keyboard);
computer.input();
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
