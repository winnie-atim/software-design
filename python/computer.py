
class KeyBoard:
    def input(self):
        print("Inputing data using a keyboard...")

class Mouse:
    def input(self):
        print("Inputing data using a mouse...")

# Computer class
class Computer:
    name: str
    keyboard = KeyBoard()
    mouse = Mouse()


    def input(self):
        self.keyboard.input()
        self.mouse.input()

#computer object
computer= Computer()
#Testing computer functionality
computer.input()




#     def input_data_from_keyboard(self):
#         print("Inputing data from a keyboard...")

#     def store_data_to_internal_memory(self):
#         print("Storing data to internal memory...")
    
#     def retrieve_data_from_internal_memory(self):
#         print("Retrieving data from internal memory ...")

#     def process_data_using_cpu(self):
#         print("Processing data using CPU...")

#     def output_data_on_builtin_screen(self):
#         print("Outputing data on builtin screen...")

#     def connect_to_WiFi(self):
#         print("Connection to WiFi...")

#     def connect_to_bluetooth(self):
#         print("Connection to Bluetooth...")



# # Computer Object
# computer:Computer = Computer()


# # Testing computer functionality
# computer.input_data_from_keyboard()
# computer.store_data_to_internal_memory()
# computer.retrieve_data_from_internal_memory()
# computer.process_data_using_cpu()
# computer.output_data_on_builtin_screen()
# computer.connect_to_WiFi()
# computer.connect_to_bluetooth()


