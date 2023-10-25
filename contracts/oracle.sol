// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import './IOracle.sol';

contract Oracle is IOracle {
    mapping(string => Currency) currency;
    address owner;
    
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    function getUSD() external view returns(Currency memory){
        return currency["USD"];
    }

    function getEURO() external view returns(Currency memory){
        return currency["EURO"];
    }

    function getJPY() external view returns(Currency memory){
        return currency["JPY"];
    }

    function setUSD(Currency memory cur) external onlyOwner{
        currency["USD"] = cur;
    }

    function setEURO(Currency memory cur) external onlyOwner{
        currency["EURO"] = cur;
    }

    function setJPY(Currency memory cur) external onlyOwner{
        currency["JPY"] = cur;
    }
}