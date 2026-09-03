Problem 2: The Privilege Escalation Trap (Mutable References)

The Scenario: A junior developer built an authentication module. They used const for the configuration object, assuming it would prevent anyone from changing the default user permissions. During a security audit, the team realized a malicious script successfully gave a guest user "Admin" rights.

The Code:

JavaScript
const userConfig = {
  role: "Guest",
  accessLevel: 1
};

function processLogin(config) {
  // A third-party script or bug alters the object
  config.role = "Admin"; 
  console.log("Logged in as:", config.role);
}

processLogin(userConfig);
console.log("Original System Role:", userConfig.role); 
The Challenge: Ask the student why the const keyword did not prevent the userConfig.role from being changed to "Admin". How can they modify the object declaration to make it truly read-only? (Learning outcome: const prevents reassignment of the variable identifier, but does not make objects or arrays immutable. Introduces Object.freeze()).