import React, {useContext} from 'react';
import { contractProvider } from '../context/ContractContext';
const Services = ()=>{
    const { value} = useContext(contractProvider);
    console.log("value of value from contract context", value);
    return(
        <h1>Services</h1>
    );
}

export default Services;