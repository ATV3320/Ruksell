// require('dotenv').config();
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(alchemyKey);
import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
const contractABI = require("./contractABI.json");
const contractAddress = "0xc7e618bc9fbb97f8ef143ada36f4b8472b7a5f48";

// window.addEventListener('load', async () => {
//     // New web3 provider
//     if (window.ethereum) {
//         window.web3 = new Web3(ethereum);
//         try {
//             // ask user for permission
//             await ethereum.enable();
//             // user approved permission
//         } catch (error) {
//             // user rejected permission
//             console.log('user rejected permission');
//         }
//     }
//     // Old web3 provider
//     else if (window.web3) {
//         window.web3 = new Web3(web3.currentProvider);
//         // no need to ask for permission
//     }
//     // No web3 provider
//     else {
//         console.log('No web3 provider detected');
//     }
//   });
// export const listContract = new web3.eth.Contract(contractABI, contractAddress);

export const Interact = () => {
  var Web3 = require("web3");
  // const { ethereum } = window;
  var web3;
  if (typeof web3 !== "undefined") {
    web3 = new Web3(Web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  }

  // Set Account
  web3.eth.defaultAccount = web3.eth.accounts[0];

  var contract = new web3.eth.Contract(contractABI, contractAddress);
  async function renderName(){
    let name1 = contract.owner();
    return name1;
  }
  <>
    <h2>See the candidate name below</h2>
    <h3 id="ownerName"></h3>
    <button onClick={
        $('#ownerName').html(renderName())}>
      Hit a function
    </button>
  </>;
};
