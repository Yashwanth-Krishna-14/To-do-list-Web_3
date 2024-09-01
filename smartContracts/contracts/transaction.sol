//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract transaction{

    uint256 transactioCount;

    event transfer(address from,address receiver,uint amount,string message,uint256 timeStamp,string keyword);


    struct transferStruct{
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint timestamp;
        string keyword;
    }

    transferStruct[] transactions;

    function addToBlockchain() public{

    }
      function getAlltransaction() public view returns(transferStruct[]memory){

        //return transactions;

    }
      function getTransactionCount() public view returns(uint256){
        //return transactionCount

    }


}

