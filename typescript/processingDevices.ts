
export default interface ProcessingDevice {
    process(): string;
}

export class CPU implements ProcessingDevice {
    process(): string {
        return "CPU processing data";
    }
}

export class GPU implements ProcessingDevice {
    process(): string {
        return "GPU processing data";
    }
}
