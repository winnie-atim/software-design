//define loginStrategy interface

interface LoginStrategy {
    login(credentials: {[key: string]: string}): boolean;
}

//creating UsernameAndPasswordStrategy
class UsernameAndPasswordStrategy implements LoginStrategy {
    login(credentials: {[key: string]: string}):boolean {
        // {username: "usnm", password: "pswd"}
        console.log("Username And Password Login Strategy");
        console.log("Username: " + credentials["username"]);
        console.log("Password: " + credentials["password"]);
        console.log(" ");
        return true;
    }
}

//creating EmailAndPasswordStrategy
class EmailAndPasswordStrategy implements LoginStrategy {
    login(credentials: {[key: string]: string}): boolean {
        // {email: "email@example.com", password: "pswd"}
        console.log("Email And Password Login Strategy");
        console.log("Email: " + credentials["email"]);
        console.log("Password: " + credentials["password"]);
        console.log(" ");
        return true;
    }
}


//creating PhoneNumberAndPasswordStrategy
class PhoneNumberAndPasswordStrategy implements LoginStrategy {
    login(credentials: {[key: string]: string}): boolean {
        // {phone_number: "+1234567890", password: "pswd"}
        console.log("Phone Number And Password Login Strategy");
        console.log("Phone Number: " + credentials["phone_number"]);
        console.log("Password: " + credentials["password"]);
        console.log(" ");
        return true;
    }
};


//using the strategies

class IAMlogger{
    // Data variables
    private static instance: IAMlogger | null = null; 
    private  static loginStrategy: LoginStrategy;
    private  static credentials: {[key: string]: string};

    // Constructor
    private constructor(loginStrategy: LoginStrategy, credentials: {[key: string]: string}){ 
        IAMlogger.loginStrategy = loginStrategy;
        IAMlogger.credentials = credentials;
  }

    // methods
    public static login(loginStrategy: LoginStrategy, credentials: {[key: string]: string}) {
        if (IAMlogger.instance === null) {
           IAMlogger.instance = new IAMlogger(loginStrategy, credentials);
           IAMlogger.loginStrategy.login(credentials);
        }
        return IAMlogger.instance;
    }
   
    public static logout(){
       IAMlogger.instance = null;
       if (IAMlogger.instance === null) {
        console.log("You have successfully logged out");
       } 
    }

    public static getInstance() { 
        return IAMlogger.instance;
     }

   public static getUserDetails() {
      if(IAMlogger.instance !== null) {
        return IAMlogger.credentials;
      } else { 
        console.log("No user logged in");
        return null;
      }
    }

    public static setLoginStrategy(loginStrategy: LoginStrategy): void {
        IAMlogger.loginStrategy = loginStrategy;
    }
}

// Login instances
let loginStrategy = new UsernameAndPasswordStrategy();
let user1 =  IAMlogger.login(loginStrategy,{username:'vanessa', password:'@vanessa123'});
 IAMlogger.logout()

loginStrategy = new EmailAndPasswordStrategy();
 let user2 =  IAMlogger.login(loginStrategy,{email:'jovita@refactory.com', password:'@jovita123'});
 IAMlogger.logout()

 loginStrategy = new PhoneNumberAndPasswordStrategy();
 let user3 =  IAMlogger.login(loginStrategy,{phone_number:'++256701234567', password:'@akram123'});
 IAMlogger.logout()

 loginStrategy = new UsernameAndPasswordStrategy();
 let user4 =  IAMlogger.login(loginStrategy,{username:'benjamin', password:'@benjamin123'});
 IAMlogger.logout()

 loginStrategy = new EmailAndPasswordStrategy();
  IAMlogger.setLoginStrategy(loginStrategy)
  IAMlogger.login(loginStrategy,{email:'benjamin@example.com', password:'@benjamin123'});


























