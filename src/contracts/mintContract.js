// const marketplaceContractABI = require("../ABI/marketplace");
const marketplaceContractABI = require("../abi/mint.json");

const provider =
  "https://sepolia.infura.io/v3/a2c1438a49cf4fab9cb4a18791a3cdee";

const { Web3 } = require("web3");
const web3 = new Web3(process.env.REACT_APP_SEPOLIA_PROVIDER);

const marketplaceContractAddress = process.env.REACT_APP_MINT_CONTRACT_ADDRESS;
console.log("provider adsa", marketplaceContractAddress);
const mintContract = new web3.eth.Contract(
  marketplaceContractABI,
  marketplaceContractAddress
);

module.exports = mintContract;
