// Task 1: Setup the 2 required libraries
var bitcoin = require('bitcoinjs-lib')
const bitcoinMessage = require('bitcoinjs-message');

// Task 2: Verify the message. Determine which was the signature produced if the given address was used to sign the given message. Hint: Try console logging to see the return value of the method. 
const address = '17RebJGPcUX3z7zoWJdmUgkBbvZ7BAKPCB'
const message = 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.'
const signature_1 = 'HJLQlDWLyb1Ef8bQKEISzFbDAKctIlaqOpGbrk3YVtRsjmC61lpE5ErkPRUFtDKtx98vHFGUWlFhsh3DiW6N0rE'
const signature_2 = 'IFn36Idac3dLo3JvQ8/+AMfgQXbj9h3WIjDXJSUO+0ZbSOVEMhQK+t6RU3CC7ECvq9QshbRtLMLThDfCxa1RkYM='
const signature_3 = 'ICcppPF+jJ+9NlvssL+qfcZP9VRbcBq8Drpw91vo+Z5hHkBuLTy+9q70u+Roi03XUIIRw+x9TU5K6FFm6Dhu718='

var keyPair = bitcoin.ECPair.fromWIF('xpub661MyMwAqRbcFvEsRkSGcJ1yrLyQiSJeVseRkE4NJiH8uX8cqpWd2wQZ9FN7D2oc4Ff6VHZnd6gm7xXKNyFw37S7NysLBjCSdmZEKuxh5gA');
var privateKey = keyPair.d.toBuffer(32);
var signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed);
console.log(signature.toString('base64'))

console.log(bitcoinMessage.verify(message, address, signature));


// console.log(bitcoinMessage.verify(message, address, signature_1));
// console.log(bitcoinMessage.verify(message, address, signature_2));
// console.log(bitcoinMessage.verify(message, address, signature_3));
