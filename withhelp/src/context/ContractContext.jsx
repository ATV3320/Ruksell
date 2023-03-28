import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import { contractABI, contractAddress } from "../utils/constants";

export const ContractContext = React.createContext();

const { ethereum } = window;

// window.ethereum
const getEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const myContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider, signer, myContract
    });
}

export const contractProvider = ({children})=>{
    return(
        <getEthereumContract.provider value={{value:"test"}}>
            {children}
        </getEthereumContract.provider>
    )
}