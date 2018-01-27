
var crypto = require('crypto-js');
var a = process.argv[2];
var v = process.env.ALG;

const crpt = msg => {
    if(v == 'MD5')
        console.log('MD5: ' + crypto.MD5(msg).toString());
    else
        console.log('SHA256: ' + crypto.SHA256(msg).toString(crypto.enc.Base64));
} 

crpt(a);


