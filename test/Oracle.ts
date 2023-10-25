import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import ethers from "ethers";
import hre from "hardhat";

import contract from "../artifacts/contracts/oracle.sol/Oracle.json"
const abi = contract.abi
const bytecode = contract.bytecode

describe("Oracle", function () {
 
    async function deploy() {
    
        const [owner, user] = await hre.ethers.getSigners()
        
        const Oracle = await hre.ethers.getContractFactory("Oracle");
        const oracle = await Oracle.deploy();
        await oracle.waitForDeployment()

    
        return { owner, user, oracle };
    } 
    
     it("Get USD", async function() {
          const { owner, user, oracle } = await loadFixture(deploy);
          
        //   expect(await oracle.connect(owner).getUSD())
      })
  })