from abc import ABC, abstractmethod

class InputDevice(ABC):

    @abstractmethod
    def input(self):
        pass

class KeyBoard(InputDevice):

    def input(self):
        print("Inputting data from a keyboard...")


class Mouse(InputDevice):

    def input(self):
        print("Inputting data from a mouse...")


class Computer:
    name: str =""
    # __input_device:InputDevice
    
    def __init__(self, input_device:InputDevice):
        self.name: str
        self.__input_device = input_device
    
    def input(self):
        self.__input_device.input()

    

    

keyboard = KeyBoard()
mouse = Mouse()
computer_using_keyboard = Computer(keyboard).input()
print("============================================================")
computer_using_mouse = Computer(mouse).input()

# computer: Computer = Computer()

# computer.input_device
# computer.input_data_from_keyboard()
# computer.store_data_to_internal_memory()
# computer.retrieve_data_to_internal_memory()
# computer.process_data_using_cpu()
# computer.output_data_on_builtin_screen()
# computer.connect_to_wifi()
# computer.connect_to_bluetooth()


# def store_data_to_internal_memory(self):
    #     print("storing data to internal memory...")

    # def retrieve_data_to_internal_memory(self):
    #     print("Retrieving data to internal memory...")

    # def process_data_using_cpu(self):
    #     print("Processing data using CPU")

    # def output_data_on_builtin_screen(self):
    #     print("Outputting data on builtin screen")

    # def connect_to_wifi(self):
    #     print("Connecting to wifi...")

    # def connect_to_bluetooth(self):
    #     print("Connecting to bluetooth...")
