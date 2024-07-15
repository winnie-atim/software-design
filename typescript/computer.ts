""
import InputDevice, {Mouse, Keyboard} from "./inputDevices";
import StorageDevice, {SSD, HDD} from "./storageDevices";
import ProcessingDevice, {CPU, GPU} from "./processingDevices";
import OutputDevice, {Monitor, Printer} from "./outputDevices";



// WiFi & Bluetooth Devices

interface WiFi {
    connectToWifi();
    disconnectFromWiFi();
}

interface Bluetooth {
    connectToBluetooth()
    disconnectFromBluetooth()
}


// The Computer Interface
class Computer {
    private _inputDevice: InputDevice;
    private _storageDevice: StorageDevice;
    private _processingDevice: ProcessingDevice;
    private _outputDevice: OutputDevice;

    constructor(
        inputDevice: InputDevice,
        storageDevice: StorageDevice,
        processingDevice: ProcessingDevice,
        outputDevice: OutputDevice,
        wifi?: WiFi,
        bluetooth?: Bluetooth
    ) {
        this._inputDevice = inputDevice;
        this._storageDevice = storageDevice;
        this._processingDevice = processingDevice;
        this._outputDevice = outputDevice;
    }

    setInputDevice(device: InputDevice): void {
        this._inputDevice = device;
    }

    setStorageDevice(device: StorageDevice): void {
        this._storageDevice = device;
    }

    setProcessingDevice(device: ProcessingDevice): void {
        this._processingDevice = device;
    }

    setOutputDevice(device: OutputDevice): void {
        this._outputDevice = device;
    }

    performInput(): string {
        return this._inputDevice.input();
    }

    performStorage(): string {
        return this._storageDevice.store() + " and " + this._storageDevice.retrieve();
    }

    performProcessing(): string {
        return this._processingDevice.process();
    }

    performOutput(): string {
        return this._outputDevice.output();
    }

}


class Laptop extends Computer implements WiFi, Bluetooth{

    connectToWifi(): string {
        return "WiFi connected";
    }
    disconnectFromWiFi(): string {
        return "WiFi disconnected";
    }
 
    connectToBluetooth(): string {
        return "Bluetooth connected";
    }
    disconnectFromBluetooth(): string {
        return "Bluetooth disconnected";
    }

}



// Example usage
let keyboard = new Keyboard();
let mouse = new Mouse();
let ssd = new SSD();
let cpu = new CPU();
let monitor = new Monitor();


// Desktop does not support WiFi and Bluetooth technologies
let computer = new Computer(keyboard, ssd, cpu, monitor);
console.log("========= COMPUTER =================================");
console.log(computer.performInput());      // Outputs: Keyboard input
console.log(computer.performStorage());    // Outputs: SSD storing data and SSD retrieving data
console.log(computer.performProcessing()); // Outputs: CPU processing data
console.log(computer.performOutput());     // Outputs: Monitor output
computer.setInputDevice(mouse);
console.log(computer.performInput());      // Outputs: Mouse input



// Laptop supports WiFi and Bluetooth technologies
let laptop = new Laptop(keyboard, ssd, cpu, monitor);
console.log("========= LAPTOP =================================");
console.log(laptop.performInput());      // Outputs: Keyboard input
console.log(laptop.performStorage());    // Outputs: SSD storing data and SSD retrieving data
console.log(laptop.performProcessing()); // Outputs: CPU processing data
console.log(laptop.performOutput());     // Outputs: Monitor output
laptop.setInputDevice(mouse);
console.log(laptop.performInput());      // Outputs: Mouse input
console.log(laptop.connectToWifi());       // Outputs: WiFi connected
console.log(laptop.connectToBluetooth());  // Outputs: Bluetooth connected
