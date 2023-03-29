import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import $ from "jquery";
import Web3 from 'web3'
const contractABI = require("./contractABI.json");
const contractAddress = "0xc7e618bc9fbb97f8ef143ada36f4b8472b7a5f48";

export const Interact = () => {
  
  const [owner1, setOwner1] = useState("");
  // console.log(owner1,"owner1")
  const {ethereum} = window;
  // let Web3 = new web3(ethereum)

  let web3 = new Web3(ethereum)
  // var Web3 = require("web3");
  // const { ethereum } = window;
  // var web3;
  // if (typeof web3 != "undefined") {
  //   web3 = new Web3(Web3.currentProvider);
  // } else {
  //   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3001"));
  // }

  // Set Account
  // web3.eth.defaultAccount = web3.eth.accounts[0];

  
  // console.log(owner1);
  // async function renderName(){
  //   let name1 = contract.owner();
  //   console.log(name1,"name1")
  //   return name1;
  // }
  // console.log("please chal ja");
  // console.log("instance", contract);
  const tokenABI = JSON.parse(JSON.stringify(contractABI))
  var contract = new web3.eth.Contract(tokenABI, contractAddress);
  // const callOwner = async ()=>{
  //   console.log("vvvvvvvvvvvvv ",contract);

  //    contract.methods.owner().call().then((e)=>{
  //     console.log("kkkkkkkkkkkk",e);
  //    });
  //   // setOwner1(owner);
  // }
  const callOwner = async ()=>{
    console.log("vvvvvvvvvvvvv ",contract);
     const tes = await contract.methods.owner().call();
     console.log("kkkkkkkkkkkk",tes);
     setOwner1(tes);
     };
  return (
    <div>
      <h1>interact</h1>
      <h2>See the candidate name below</h2>
      <button onClick={()=>callOwner()}>show owner</button>
      {owner1 && (
        <div>owner's address is: {owner1}</div>
      )}
    </div>
  );
};
