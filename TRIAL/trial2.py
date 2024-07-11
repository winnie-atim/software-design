class KeyBoard:
    def input(self):
        print("Inputing data using a keyboard...")

class Mouse:
    def input(self):
        print("Inputing data using a mouse...")

class Projector:
    def output(self):
        print("Outputing data from a projector...")

class Printer:
    def output(self):
        print("Outputing data to a printer...")

class Process:
    def process(self):
        print("Processing data using CPU...")

class WiFi:
    def connecting(self):
        print("Connection to WI-Fi...")

class Bluetooth:
    def wirelessConnection(self):
        print("Connection to Bluetooth...")

class Computer:

    def __init__(self):
        # self.name = name
        self.keyboard = KeyBoard()
        self.mouse = Mouse()
        self.projector = Projector()
        self.printer = Printer()
        self.process = Process()
        self.wifi = WiFi()
        self.bluetooth = Bluetooth()


    def input(self):
        self.keyboard.input()
        self.mouse.input()

    def output(self):
        self.projector.output()
        self.printer.output()

    def process(self):
        self.process.Process()

    def connecting(self):
        self.wifi.connecting()

    def wirelessConnection(self):
        self.bluetooth.wirelessConnection()


#computer object
computer= Computer()
#Testing computer functionality
computer.input()
computer.output()
# computer.process()
computer.connecting()
computer.wirelessConnection()
print(Computer())



