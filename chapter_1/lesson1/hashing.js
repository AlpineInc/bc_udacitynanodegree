var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");


var myHash = (hashInput) => {
    var hashOutput = SHA256(hashInput);
    console.log("Output of myHash function is " + hashOutput);
    return hashOutput;
};

myHash("Blockchain Rock!");

var object1 = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

myHash(JSON.stringify(object1));

console.log("The object is " + JSON.stringify(object1));


/**
 * Step 1: Verify 'crypto-js' module is installed for your project
 * After verifying it is installed, move on to Step 2. No code needs to be written here.
 */

/**
 * Step 2: Import from crypto-js module the sha265 library
 */

// Write your code here

/**
 * Variables: Do not change variable values to be able to answer the quiz
 */

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

/**
 * Step 3: Add code to the `generate hash function
 * Function that generate the SHA256 Hash
 * @param {*} obj 
 */

const generateHash = (obj) => SHA256(JSON.stringify(obj));


console.log(`SHA265 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA265 Hash: ${generateHash(dataObject)}`);

/**
 * Run your application using `node app.js`
 */