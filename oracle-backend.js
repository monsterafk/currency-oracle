const ethers = require("ethers");
const request = require('request');
const awaitRequest = require('async-request');

require("dotenv").config;

const contractData = require("./artifacts/contracts/oracle.sol/Oracle.json");
const abi = contractData.abi;

const provider = new ethers.AlchemyProvider("sepolia", process.env.SEPOLIA_RPC);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract("0x59EcdA0712cF0510d924643C88DC7196d120312a", abi, wallet);

const delay = 1000 * 60 * 60 * 6;

async function setValue() {

    let usd = await awaitRequest(process.env.URL, {
        'method': "GET"
    })
    usd = JSON.parse(usd.body);
    let date = usd.date;
    usd = (usd.rates.USD).toString();
    
    let euro = await awaitRequest(process.env.URL + '&base=USD', {
        'method': "GET" 
    })
    euro = JSON.parse(euro.body)
    euro = euro.rates.EURO

    let jpy = await awaitRequest(process.env.URL + '&base=JPY', {
        'method': "GET" 
    })
    jpy = JSON.parse(jpy.body)
    jpy = jpy.rates.USD

    await contract.connect(wallet).setEURO({
        date: date,
        price: usd
    })

    await contract.connect(wallet).setUSD({
        date: date,
        price: euro
    })

    await contract.connect(wallet).setJPY({
        date: date,
        price: jpy
    })

}
setInterval(setValue, delay)
