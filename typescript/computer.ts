class KeyBoard{
    input(){
        console.log("Inputing data from a keyboard...");
    }
}


class Mouse{
    input(){
        console.log("Inputing data using Mouse...");
    }
}



class Computer{
    name : string;
    keyboard:KeyBoard = new KeyBoard();
    mouse:Mouse = new Mouse();

    input(){
        this.keyboard.input();
        this.mouse.input();
    }

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



// Computer Object
let computer = new Computer();

// Testing computer functionality
computer.input();
// computer.storeDataToInternalMemory();
// computer.retrieveDataFromInternalMemory();
// computer.processDataUsingCpu();
// computer.outputDataOnBuiltinScreen();
// computer.connectToWiFi();
// computer.connectToBluetooth();
