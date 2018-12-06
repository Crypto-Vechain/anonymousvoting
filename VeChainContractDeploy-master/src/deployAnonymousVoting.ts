'use strict'

import { thorifyWeb3 } from "./thorifyWeb3";
import fs = require('fs');
import path = require('path');
import { origin } from "../config"
const ThorifyWeb3 = thorifyWeb3();
const web3 = ThorifyWeb3.thorifyAdaptor("http://localhost:8669")
import { thorify } from "thorify";

web3.eth.accounts.wallet.add(origin.priKey)
web3.eth.getBalance(origin.fromAddress).then(function(result : any){
    console.log("balance is: ", result)
})


const deploy = async () => {
    // JSON.parse(greeterABI)
    var contract = new web3.eth.Contract(origin.anonymousVotingABI, {
        from: origin.fromAddress,
        data: origin.anonymousVotingCode
    })

    contract.deploy({
        // _gap: 600, 
        // _charity: "0x7567d83b7b8d80addcb281a71d54fc7b3364ffed"
        arguments: [600, "0x7567d83b7b8d80addcb281a71d54fc7b3364ffed"]
    })
    .send({
        from: origin.fromAddress,
        gasPrice: '31000000000',
        gas: "10000000"
    })
    .on('error', function(error : any){ console.log("contract deploy error", error) })
    .on('transactionHash', function(transactionHash : any){ console.log("contract deploy transaction hash", transactionHash) })
    .on('receipt', function(receipt : any){
       console.log("contract receipt", receipt) // contains the new contract address
    })
    .on('confirmation', function(confirmationNumber : any, receipt : any){ console.log("contract deploy confirmation", confirmationNumber) })
    .then(function(newContractInstance : any){
        console.log("contract Instance: ", newContractInstance.options.address) // instance with the new contract address
    });
}

const getTran = async (txid:string) => {
    web3.eth.getTransactionReceipt(txid).then(function(result: any)  {
        console.log("result of get transaction: ", result)
    })
}

try {
    deploy();
} catch (e) {
    console.log('error:', e)
}

// getTran("0x61cecede18f0888e35c09e52c6810ab9c2f9eb256ac9bd5f70365d99962a5d80")