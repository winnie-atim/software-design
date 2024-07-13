// Input Components
interface InputDevice{
    input(): void;
}

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


class Computer{
    name : string = "";

    private inputDevice:InputDevice;

    constructor(inputDevice:InputDevice) {
        this.inputDevice = inputDevice;  
    }

    input(){
        this.inputDevice.input();
    }

    setInputDevice(inputDevice:InputDevice){
        this.inputDevice = inputDevice;  
    }

    getInputDevice(){
        return this.inputDevice;
    }


}

class Desktop extends Computer{
    behaveLikeAdesktop(){}
}

class Laptop extends Computer{
    saveBattery(){}
}

let keyboard = new KeyBoard();
let mouse = new Mouse();


let computer = new Computer(keyboard);
computer.input();
computer.setInputDevice(mouse)
computer.input();
computer.setInputDevice(keyboard)
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
    
