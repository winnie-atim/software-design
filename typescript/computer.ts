class KeyBoard implements InputDevice{
    input(){
        console.log("Inputing data from a keyboard...");
    }
}

class Mouse implements InputDevice{
    input(){
        console.log("Inputing data using Mouse...");
    }
}

interface InputDevice{
    input(): void;
}


class Computer{
    name : string = "";
    // keyboard:KeyBoard = new KeyBoard();
    // mouse:Mouse = new Mouse();

// Option 1 #####################################################
    inputDevice:InputDevice;

    constructor(inputDevice:InputDevice) {
        this.inputDevice = inputDevice;  
    }

    input(){
        this.inputDevice.input();
    }
// OPTION 2 ################################################
    // inputDevices:InputDevice[];

    // constructor(inputDevices:InputDevice[]) {
    //     this.inputDevices = inputDevices;  
    // }

    // input(){
    //     this.inputDevices.forEach(device => device.input());
    // }
// #########################################################
    // input(){
    //     this.keyboard.input();
    //     this.mouse.input();
    // }

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

// New keyboard & Mouse
let keyboard = new KeyBoard();
let mouse = new Mouse();
// Computer Object(s)
let computer = new Computer(keyboard); //Option 1
// let computer = new Computer([keyboard, mouse]);  //Option 2

// Testing computer functionality
computer.input();
// computer.storeDataToInternalMemory();
// computer.retrieveDataFromInternalMemory();
// computer.processDataUsingCpu();
// computer.outputDataOnBuiltinScreen();
// computer.connectToWiFi();
// computer.connectToBluetooth();
