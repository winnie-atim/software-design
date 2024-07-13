// Define interfaces
interface InputDevice {
    input(): string;
}

interface StorageDevice {
    store(): string;
    retrieve(): string;
}

interface ProcessingDevice {
    process(): string;
}

interface OutputDevice {
    output(): string;
}

// Define classes implementing interfaces
class Keyboard implements InputDevice {
    input(): string {
        return "Keyboard input";
    }
}

class Mouse implements InputDevice {
    input(): string {
        return "Mouse input";
    }
}

class SSD implements StorageDevice {
    store(): string {
        return "SSD storing data";
    }
    retrieve(): string {
        return "SSD retrieving data";
    }
}

class HDD implements StorageDevice {
    store(): string {
        return "HDD storing data";
    }
    retrieve(): string {
        return "HDD retrieving data";
    }
}

class CPU implements ProcessingDevice {
    process(): string {
        return "CPU processing data";
    }
}

class GPU implements ProcessingDevice {
    process(): string {
        return "GPU processing data";
    }
}

class Monitor implements OutputDevice {
    output(): string {
        return "Monitor output";
    }
}

class Printer implements OutputDevice {
    output(): string {
        return "Printer output";
    }
}

// WiFi & Bluetooth classes
class WiFi {
    connect(): string {
        return "WiFi connected";
    }
    disconnect(): string {
        return "WiFi disconnected";
    }
}

class Bluetooth {
    connect(): string {
        return "Bluetooth connected";
    }
    disconnect(): string {
        return "Bluetooth disconnected";
    }
}

// Define Computer class
class Computer {
    private _inputDevice: InputDevice;
    private _storageDevice: StorageDevice;
    private _processingDevice: ProcessingDevice;
    private _outputDevice: OutputDevice;
    private _wifi?: WiFi;
    private _bluetooth?: Bluetooth;

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
        this._wifi = wifi;
        this._bluetooth = bluetooth;
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

    setWiFi(wifi: WiFi): void {
        this._wifi = wifi;
    }

    setBluetooth(bt: Bluetooth): void {
        this._bluetooth = bt;
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

    connectWiFi(): string {
        if (this._wifi) {
            return this._wifi.connect();
        }
        return "No WiFi support";
    }

    connectBluetooth(): string {
        if (this._bluetooth) {
            return this._bluetooth.connect();
        }
        return "No Bluetooth support";
    }
}

// Example usage
let keyboard = new Keyboard();
let mouse = new Mouse();
let ssd = new SSD();
let cpu = new CPU();
let monitor = new Monitor();
let wifi = new WiFi();
let bluetooth = new Bluetooth();

let computer = new Computer(keyboard, ssd, cpu, monitor, wifi, bluetooth);
console.log(computer.performInput());      // Outputs: Keyboard input
console.log(computer.performStorage());    // Outputs: SSD storing data and SSD retrieving data
console.log(computer.performProcessing()); // Outputs: CPU processing data
console.log(computer.performOutput());     // Outputs: Monitor output
console.log(computer.connectWiFi());       // Outputs: WiFi connected
console.log(computer.connectBluetooth());  // Outputs: Bluetooth connected

// Change the input device
computer.setInputDevice(mouse);
console.log(computer.performInput());      // Outputs: Mouse input

// Create a computer without WiFi and Bluetooth support
let basicComputer = new Computer(keyboard, ssd, cpu, monitor);
console.log(basicComputer.connectWiFi());  // Outputs: No WiFi support
console.log(basicComputer.connectBluetooth()); // Outputs: No Bluetooth support