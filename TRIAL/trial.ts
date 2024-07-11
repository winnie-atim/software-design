// indicates the purpose of each component
class KeyBoard{
    input(){
        console.log("Inputing data using a keyboard...");
    }
}


class Mouse{
    input(){
        console.log("Inputing data using Mouse...");
    }
}


class Projector{
    output(){
        console.log("Outputing data from a projector...");
    }
}


class Printer{
    output(){
        console.log("Outputing data from a printer...");
    }
}

class Processor{
    processing(){
        console.log("Processing data using CPU...");
    }
}

class WiFi{
    Connecting(){
        console.log("Connection to WiFi...");
    }
}

class Bluetooth{
    wirelessConnection(){
        console.log("Connection to bluetooth...");
    }
}



class Computer{
    name : string;
    keyboard:KeyBoard = new KeyBoard();
    mouse:Mouse = new Mouse();
    projector:Projector = new Projector();
    printer:Printer = new Printer();
    processor:Processor = new Processor();
    wifi:WiFi = new WiFi();
    bluetooth:Bluetooth = new Bluetooth();

    input(){
        this.keyboard.input();
        this.mouse.input();
    }
    output(){
        this.projector.output();
        this.printer.output();
    }
    processing(){
        this.processor.processing();
    }

    connecting(){
        this.wifi.Connecting();
    }

    wirelessConnection(){
        this.bluetooth.wirelessConnection();
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