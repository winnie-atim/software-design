from abc import ABC, abstractmethod

# Define interfaces
class InputDevice(ABC):
    @abstractmethod
    def input(self) -> str:
        pass

class StorageDevice(ABC):
    @abstractmethod
    def store(self) -> str:
        pass

    @abstractmethod
    def retrieve(self) -> str:
        pass

class ProcessingDevice(ABC):
    @abstractmethod
    def process(self) -> str:
        pass

class OutputDevice(ABC):
    @abstractmethod
    def output(self) -> str:
        pass

# Define classes implementing interfaces
class Keyboard(InputDevice):
    def input(self) -> str:
        return "Keyboard input"

class Mouse(InputDevice):
    def input(self) -> str:
        return "Mouse input"

class SSD(StorageDevice):
    def store(self) -> str:
        return "SSD storing data"

    def retrieve(self) -> str:
        return "SSD retrieving data"

class HDD(StorageDevice):
    def store(self) -> str:
        return "HDD storing data"

    def retrieve(self) -> str:
        return "HDD retrieving data"

class CPU(ProcessingDevice):
    def process(self) -> str:
        return "CPU processing data"

class GPU(ProcessingDevice):
    def process(self) -> str:
        return "GPU processing data"

class Monitor(OutputDevice):
    def output(self) -> str:
        return "Monitor output"

class Printer(OutputDevice):
    def output(self) -> str:
        return "Printer output"

# WiFi & Bluetooth classes
class WiFi:
    def connect(self) -> str:
        return "WiFi connected"

    def disconnect(self) -> str:
        return "WiFi disconnected"

class Bluetooth:
    def connect(self) -> str:
        return "Bluetooth connected"

    def disconnect(self) -> str:
        return "Bluetooth disconnected"

# Define Computer class
class Computer:
    def __init__(self,
                 input_device: InputDevice,
                 storage_device: StorageDevice,
                 processing_device: ProcessingDevice,
                 output_device: OutputDevice,
                 wifi: WiFi = None,
                 bluetooth: Bluetooth = None):
        self._input_device = input_device
        self._storage_device = storage_device
        self._processing_device = processing_device
        self._output_device = output_device
        self._wifi = wifi
        self._bluetooth = bluetooth

    def set_input_device(self, device: InputDevice):
        self._input_device = device

    def set_storage_device(self, device: StorageDevice):
        self._storage_device = device

    def set_processing_device(self, device: ProcessingDevice):
        self._processing_device = device

    def set_output_device(self, device: OutputDevice):
        self._output_device = device

    def set_wifi(self, wifi: WiFi):
        self._wifi = wifi

    def set_bluetooth(self, bt: Bluetooth):
        self._bluetooth = bt

    def perform_input(self) -> str:
        return self._input_device.input()

    def perform_storage(self) -> str:
        return f"{self._storage_device.store()} and {self._storage_device.retrieve()}"

    def perform_processing(self) -> str:
        return self._processing_device.process()

    def perform_output(self) -> str:
        return self._output_device.output()

    def connect_wifi(self) -> str:
        if self._wifi:
            return self._wifi.connect()
        return "No WiFi support"

    def connect_bluetooth(self) -> str:
        if self._bluetooth:
            return self._bluetooth.connect()
        return "No Bluetooth support"

# Example usage
keyboard = Keyboard()
mouse = Mouse()
ssd = SSD()
cpu = CPU()
monitor = Monitor()
wifi = WiFi()
bluetooth = Bluetooth()

computer = Computer(keyboard, ssd, cpu, monitor, wifi, bluetooth)
print(computer.perform_input())      # Outputs: Keyboard input
print(computer.perform_storage())    # Outputs: SSD storing data and SSD retrieving data