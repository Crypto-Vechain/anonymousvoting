'use strict';

import { thorify } from "thorify";
import { Address, Bytes32, BigInt, blake2b256, keccak256, Secp256k1, Transaction } from 'thor-model-kit'
import { userInfo } from "os";
import { origin } from "../config"
import { thorifyWeb3 } from "./thorifyWeb3";
import fs = require('fs');
import path = require('path');
const ThorifyWeb3 = thorifyWeb3();
const web3 = ThorifyWeb3.thorifyAdaptor("http://localhost:8669")

let devAccounts = [
    "0xdce1443bd2ef0c2631adc1c67e5c93f13dc23a41c18b536effbbdcbcdb96fb65",
    "0x321d6443bc6177273b5abf54210fe806d451d6b7973bccc2384ef78bbcd0bf51",
    "0x2d7c882bad2a01105e36dda3646693bc1aaaa45b0ed63fb0ce23c060294f3af2",
    "0x593537225b037191d322c3b1df585fb1e5100811b71a6f7fc7e29cca1333483e",
    "0xca7b25fc980c759df5f3ce17a3d881d6e19a38e651fc4315fc08917edab41058",
    "0x88d2d80b12b92feaa0da6d62309463d20408157723f2d7e799b6a74ead9a673b",
    "0xfbb9e7ba5fe9969a71c6599052237b91adeb1e5fc0c96727b66e56ff5d02f9d0",
    "0x547fb081e73dc2e22b4aae5c60e2970b008ac4fc3073aebc27d41ace9c4f53e9",
    "0xc8c53657e41a8d669349fc287f57457bd746cb1fcfc38cf94d235deb2cfca81b",
    "0x87e0eba9c86c494d98353800571089f316740b0cb84c9a7cdf2fe5c9997c7966"
]

for(var i=0; i<devAccounts.length; i++){
    let pk = web3.eth.accounts.privateKeyToAccount(devAccounts[i]);
    console.log(i+": ", pk)
}
let privKey = Secp256k1.generatePrivateKey()
console.log("private key: ", privKey.toString())

