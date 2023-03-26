require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require("./contractABI.json");
const contractAddress = "0xc7e618bc9fbb97f8ef143ada36f4b8472b7a5f48";

export const listContract = new web3.eth.Contract(contractABI, contractAddress);