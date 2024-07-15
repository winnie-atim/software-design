"";
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var inputDevices_1 = require("./inputDevices");
var storageDevices_1 = require("./storageDevices");
var processingDevices_1 = require("./processingDevices");
var outputDevices_1 = require("./outputDevices");
// The Computer Interface
var Computer = /** @class */ (function () {
    function Computer(inputDevice, storageDevice, processingDevice, outputDevice, wifi, bluetooth) {
        this._inputDevice = inputDevice;
        this._storageDevice = storageDevice;
        this._processingDevice = processingDevice;
        this._outputDevice = outputDevice;
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
    return Computer;
}());
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Laptop.prototype.connectToWifi = function () {
        return "WiFi connected";
    };
    Laptop.prototype.disconnectFromWiFi = function () {
        return "WiFi disconnected";
    };
    Laptop.prototype.connectToBluetooth = function () {
        return "Bluetooth connected";
    };
    Laptop.prototype.disconnectFromBluetooth = function () {
        return "Bluetooth disconnected";
    };
    return Laptop;
}(Computer));
// Example usage
var keyboard = new inputDevices_1.Keyboard();
var mouse = new inputDevices_1.Mouse();
var ssd = new storageDevices_1.SSD();
var cpu = new processingDevices_1.CPU();
var monitor = new outputDevices_1.Monitor();
// Desktop does not support WiFi and Bluetooth technologies
var computer = new Computer(keyboard, ssd, cpu, monitor);
console.log("========= COMPUTER =================================");
console.log(computer.performInput()); // Outputs: Keyboard input
console.log(computer.performStorage()); // Outputs: SSD storing data and SSD retrieving data
console.log(computer.performProcessing()); // Outputs: CPU processing data
console.log(computer.performOutput()); // Outputs: Monitor output
computer.setInputDevice(mouse);
console.log(computer.performInput()); // Outputs: Mouse input
// Laptop supports WiFi and Bluetooth technologies
var laptop = new Laptop(keyboard, ssd, cpu, monitor);
console.log("========= LAPTOP =================================");
console.log(laptop.performInput()); // Outputs: Keyboard input
console.log(laptop.performStorage()); // Outputs: SSD storing data and SSD retrieving data
console.log(laptop.performProcessing()); // Outputs: CPU processing data
console.log(laptop.performOutput()); // Outputs: Monitor output
laptop.setInputDevice(mouse);
console.log(laptop.performInput()); // Outputs: Mouse input
console.log(laptop.connectToWifi()); // Outputs: WiFi connected
console.log(laptop.connectToBluetooth()); // Outputs: Bluetooth connected
