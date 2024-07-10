class Computer:
    name: str

    def input_data_from_keyboard(self):
        print("inputting data from keyboard...")

    def store_data_to_internal_memory(self):
        print("storing data to internal memory...")

    def retrieve_data_to_internal_memory(self):
        print("Retrieving data to internal memory...")

    def process_data_using_cpu(self):
        print("Processing data using CPU")

    def output_data_on_builtin_screen(self):
        print("Outputting data on builtin screen")

    def connect_to_wifi(self):
        print("Connecting to wifi...")

    def connect_to_bluetooth(self):
        print("Connecting to bluetooth...")


computer:Computer = Computer()

computer.input_data_from_keyboard()
computer.store_data_to_internal_memory()
computer.retrieve_data_to_internal_memory()
computer.process_data_using_cpu()
computer.output_data_on_builtin_screen()
computer.connect_to_wifi()
computer.connect_to_bluetooth()