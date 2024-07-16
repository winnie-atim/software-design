
// Output Devices
export default interface OutputDevice {
    output(): string;
}


export class Monitor implements OutputDevice {
    output(): string {
        return "Monitor output";
    }
}

export class Printer implements OutputDevice {
    output(): string {
        return "Printer output";
    }
}
