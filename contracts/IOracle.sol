// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IOracle {

    struct Currency {
        string date;
        string price;
    }

    function getUSD() external view returns(Currency memory);
    function getEURO() external view returns(Currency memory);
    function getJPY() external view returns(Currency memory);
    function setUSD(Currency memory cur) external;
    function setEURO(Currency memory cur)external;
    function setJPY(Currency memory cur) external;
} 