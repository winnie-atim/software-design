export default interface StorageDevice {
    store(): string;
    retrieve(): string;
}

export class SSD implements StorageDevice {
    store(): string {
        return "SSD storing data";
    }
    retrieve(): string {
        return "SSD retrieving data";
    }
}

export class HDD implements StorageDevice {
    store(): string {
        return "HDD storing data";
    }
    retrieve(): string {
        return "HDD retrieving data";
    }
}
