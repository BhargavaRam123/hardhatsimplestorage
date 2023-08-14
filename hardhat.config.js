require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter");
/** @type import('hardhat/config').HardhatUserConfig */
require("./tasks/blocknumber");
require("solidity-coverage");
const rpc = process.env.rpcurl;

const pk = process.env.privatekey;

const key = process.env.escankey;

module.exports = {
  networks: {
    goerli: {
      url: rpc,
      accounts: [pk],
      chainId: 5,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },

  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: key,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gasreport.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.coinmarketcapapikey,

  },
  solidity: "0.8.19",
};
