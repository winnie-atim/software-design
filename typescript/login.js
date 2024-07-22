//define loginStrategy interface
//creating UsernameAndPasswordStrategy
var UsernameAndPasswordStrategy = /** @class */ (function () {
    function UsernameAndPasswordStrategy() {
    }
    UsernameAndPasswordStrategy.prototype.login = function (credentials) {
        // {username: "usnm", password: "pswd"}
        console.log("Username And Password Login Strategy");
        console.log("Username: " + credentials["username"]);
        console.log("Password: " + credentials["password"]);
        console.log(" ");
        return true;
    };
    return UsernameAndPasswordStrategy;
}());
//creating EmailAndPasswordStrategy
var EmailAndPasswordStrategy = /** @class */ (function () {
    function EmailAndPasswordStrategy() {
    }
    EmailAndPasswordStrategy.prototype.login = function (credentials) {
        // {email: "email@example.com", password: "pswd"}
        console.log("Email And Password Login Strategy");
        console.log("Email: " + credentials["email"]);
        console.log("Password: " + credentials["password"]);
        console.log(" ");
        return true;
    };
    return EmailAndPasswordStrategy;
}());
//creating PhoneNumberAndPasswordStrategy
var PhoneNumberAndPasswordStrategy = /** @class */ (function () {
    function PhoneNumberAndPasswordStrategy() {
    }
    PhoneNumberAndPasswordStrategy.prototype.login = function (credentials) {
        // {phone_number: "+1234567890", password: "pswd"}
        console.log("Phone Number And Password Login Strategy");
        console.log("Phone Number: " + credentials["phone_number"]);
        console.log("Password: " + credentials["password"]);
        console.log(" ");
        return true;
    };
    return PhoneNumberAndPasswordStrategy;
}());
;
//using the strategies
var IAMlogger = /** @class */ (function () {
    // Constructor
    function IAMlogger(loginStrategy, credentials) {
        IAMlogger.loginStrategy = loginStrategy;
        IAMlogger.credentials = credentials;
    }
    // methods
    IAMlogger.login = function (loginStrategy, credentials) {
        if (IAMlogger.instance === null) {
            IAMlogger.instance = new IAMlogger(loginStrategy, credentials);
            IAMlogger.loginStrategy.login(credentials);
        }
        return IAMlogger.instance;
    };
    IAMlogger.logout = function () {
        IAMlogger.instance = null;
        if (IAMlogger.instance === null) {
            console.log("You have successfully logged out");
        }
    };
    IAMlogger.getInstance = function () {
        return IAMlogger.instance;
    };
    IAMlogger.getUserDetails = function () {
        if (IAMlogger.instance !== null) {
            return IAMlogger.credentials;
        }
        else {
            console.log("No user logged in");
            return null;
        }
    };
    IAMlogger.setLoginStrategy = function (loginStrategy) {
        IAMlogger.loginStrategy = loginStrategy;
    };
    // Data variables
    IAMlogger.instance = null;
    return IAMlogger;
}());
// Login instances
var loginStrategy = new UsernameAndPasswordStrategy();
var user1 = IAMlogger.login(loginStrategy, { username: 'vanessa', password: '@vanessa123' });
IAMlogger.logout();
loginStrategy = new EmailAndPasswordStrategy();
var user2 = IAMlogger.login(loginStrategy, { email: 'jovita@refactory.com', password: '@jovita123' });
IAMlogger.logout();
loginStrategy = new PhoneNumberAndPasswordStrategy();
var user3 = IAMlogger.login(loginStrategy, { phone_number: '++256701234567', password: '@akram123' });
IAMlogger.logout();
loginStrategy = new UsernameAndPasswordStrategy();
var user4 = IAMlogger.login(loginStrategy, { username: 'benjamin', password: '@benjamin123' });
IAMlogger.logout();
loginStrategy = new EmailAndPasswordStrategy();
IAMlogger.setLoginStrategy(loginStrategy);
IAMlogger.login(loginStrategy, { email: 'benjamin@example.com', password: '@benjamin123' });
