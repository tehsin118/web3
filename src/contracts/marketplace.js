// const marketplaceContractABI = require("../ABI/marketplace");
const marketplaceContractABI = require("../abi/market.json");

const provider =
  "https://sepolia.infura.io/v3/a2c1438a49cf4fab9cb4a18791a3cdee";

const { Web3 } = require("web3");
const web3 = new Web3(provider);

const marketplaceContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
console.log("provider", provider);
const marketplaceContract = new web3.eth.Contract(
  marketplaceContractABI,
  marketplaceContractAddress
);

module.exports = marketplaceContract;
