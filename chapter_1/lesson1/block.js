const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data) {
        this.id = 0;
        this.nonce = 144445;
        this.body = data;
        this.hash = "";
    }

    generateHash() {
        // Use this to create a temporary reference of the class object
        let self = this;
        //Implement your code here
        return new Promise((resolve, reject) => {
            this.hash = SHA256(JSON.stringify(this));
            resolve(self);
        });
        
    }

}

module.exports.Block = Block;