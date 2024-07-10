// Computer class
class Computer{
    name : string;

    constructor(name : string){
        this.name = name;
    }

    inputDataFromKeyBoard(){
        console.log("Inputing data from a keyboard...");
    }

    storeDataToInternalMemory(){
        console.log("Storing data in internal memory...");
    }

    retrieveDataFromInternalMemory(){
        console.log("Retrieving data from internal memory ...");
    }

    processDataUsingCpu(){
        console.log("Processing data using CPU...");
    }
    

    outputDataOnBuiltinScreen(){
        console.log("Outputting data on the built-in screen...");
    
    }
    
    connectToWiFi(){
        console.log("Connection to WiFi...");
    }

    connectToBluetooth(){
        console.log("Connection to Bluetooth...");
    }
    
}

// Computer Object
let computer = new Computer("MyComputer");

// Testing computer functionality
computer.inputDataFromKeyBoard();
computer.storeDataToInternalMemory();
computer.retrieveDataFromInternalMemory();
computer.processDataUsingCpu();
computer.outputDataOnBuiltinScreen();
computer.connectToWiFi();
computer.connectToBluetooth();