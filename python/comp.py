#COMPUTER CLASS
class Computer:
    name: str
    def input_data_from_keyboard(self):
        print("Inputing data from a keyboard...")


    def store_data_to_internal_memory(self):
        print("Storing data to internal memory...")

    def retrieve_data_from_internal_memory(self):
        print("Retrieving data from internal memory...")

   

    def process_data_using_cpu(self):
        print("Processing data using CPU...")


    def output_data_on_builtin_screen(self):
        print("Outputting data on built-in screen...")

    def connect_to_WiFi(self):
        print("Connecting to WI-FI...")

    def connect_to_Bluetooth(self):
        print("Connecting to Bluetooth...")

#computer object
computer:Computer = Computer()

#Testing computer functionality
computer.input_data_from_keyboard()
computer.store_data_to_internal_memory()
computer.retrieve_data_from_internal_memory()
computer.process_data_using_cpu()
computer.output_data_on_builtin_screen()
computer.connect_to_WiFi()
computer.connect_to_Bluetooth()
#liskov subtitution only works where there is inheritance or subclasses
