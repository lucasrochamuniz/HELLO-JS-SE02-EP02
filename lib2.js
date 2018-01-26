const cryptoJS = require("crypto-js");

function gibberish (word) {
    return cryptoJS.SHA256(word).toString(cryptoJS.enc.Base64);
}

module.exports = gibberish;