from abc import ABC, abstractmethod

# Interface for Computer
class Computer(ABC):
    @abstractmethod
    def cost(self) -> int:
        pass

    @abstractmethod
    def description(self) -> str:
        pass

# BasicComputer class implementing the Computer interface
class BasicComputer(Computer):
    def cost(self) -> int:
        return 1000  # base cost of the computer

    def description(self) -> str:
        return 'Basic Computer'

# Abstract decorator class implementing the Computer interface
class ComputerDecorator(Computer):
    def __init__(self, computer: Computer):
        self._computer = computer

    @abstractmethod
    def cost(self) -> int:
        pass

    @abstractmethod
    def description(self) -> str:
        pass

# Concrete decorator for Pluggable Mouse
class PluggableMouseDecorator(ComputerDecorator):
    def cost(self) -> int:
        return self._computer.cost() + 50  # additional cost of the pluggable mouse

    def description(self) -> str:
        return self._computer.description() + ', Pluggable Mouse'

# Concrete decorator for External Keyboard
class ExternalKeyboardDecorator(ComputerDecorator):
    def cost(self) -> int:
        return self._computer.cost() + 80  # additional cost of the external keyboard

    def description(self) -> str:
        return self._computer.description() + ', External Keyboard'

# Concrete decorator for Wireless Mouse
class WirelessMouseDecorator(ComputerDecorator):
    def cost(self) -> int:
        return self._computer.cost() + 70  # additional cost of the wireless mouse

    def description(self) -> str:
        return self._computer.description() + ', Wireless Mouse'

# Concrete decorator for External Storage Device
class ExternalStorageDecorator(ComputerDecorator):
    def cost(self) -> int:
        return self._computer.cost() + 100  # additional cost of the external storage device

    def description(self) -> str:
        return self._computer.description() + ', External Storage Device'

# Concrete decorator for Bluetooth Supported Headsets
class BluetoothHeadsetsDecorator(ComputerDecorator):
    def cost(self) -> int:
        return self._computer.cost() + 150  # additional cost of the Bluetooth supported headsets

    def description(self) -> str:
        return self._computer.description() + ', Bluetooth Supported Headsets'

# Usage example
my_computer: Computer = BasicComputer()
print(my_computer.description() + ' costs $' + str(my_computer.cost()))

my_computer = PluggableMouseDecorator(my_computer)
print(my_computer.description() + ' costs $' + str(my_computer.cost()))

my_computer = ExternalKeyboardDecorator(my_computer)
print(my_computer.description() + ' costs $' + str(my_computer.cost()))

my_computer = WirelessMouseDecorator(my_computer)
print(my_computer.description() + ' costs $' + str(my_computer.cost()))

my_computer = ExternalStorageDecorator(my_computer)
print(my_computer.description() + ' costs $' + str(my_computer.cost()))

my_computer = BluetoothHeadsetsDecorator(my_computer)
print(my_computer.description() + ' costs $' + str(my_computer.cost()))