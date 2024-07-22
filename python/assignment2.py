class IAMlogger:
    __instance = None
    __username = None
    __password = None

    def __init__(self, username, password):
        if IAMlogger.__instance is None:
            IAMlogger.__instance = self
            IAMlogger.__username = username
            IAMlogger.__password = password

    @staticmethod
    def login(username, password):
        if IAMlogger.__instance is None:
            IAMlogger(username, password)
        return IAMlogger.__instance


    @staticmethod
    def logout():
        IAMlogger.__instance = None
        if IAMlogger.__instance is None:
            return "Logged out successfully"
        


    @staticmethod
    def get_instance():
        return IAMlogger.__instance

    @staticmethod
    def get_user_details():
        if IAMlogger.__instance is not None:
            return IAMlogger.__username, IAMlogger.__password
        else:
            return "No active user logged in"


user1 = IAMlogger.login('vanessa', '@vanessa123')
print(IAMlogger.get_user_details())
IAMlogger.logout()


user2 = IAMlogger.login('jovita', '@jovita123')
print(IAMlogger.get_user_details())
# IAMlogger.logout()

user3 = IAMlogger.login('akram', '@akram123')
print(IAMlogger.get_user_details())
# IAMlogger.logout()

user4 = IAMlogger.login('benjamin', '@benjamin123')
print(IAMlogger.get_user_details())
# IAMlogger.logout()