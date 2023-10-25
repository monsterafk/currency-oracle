require('dotenv').config;

import {ethers} from "hardhat"

const output = require("../artifacts/contracts/oracle.sol/Oracle.json")
const bytecode = output.bytecode
const abi = output.abi


const deploy = async function () {
    try{
        // const provider = new ethers.InfuraProvider("dc19817fb2ce4fc7ab314d96868f2eb0", "60f64a8ef2b447408802c670dd018e21");
        // const wallet =  new ethers.Wallet(process.env.PRIVATE_KEY, provider)

        // const Oracle = new ethers.ContractFactory(abi, bytecode, wallet);
        // const oracle = await Oracle.deploy();

        const or = await ethers.deployContract("Oracle")
        // await oracle.waitForDeployment();

        console.log("Oracle contract was deployed to: ", or.target)    
    }catch(err) {
        console.log(err)
    }


}

deploy()


