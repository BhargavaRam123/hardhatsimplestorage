const { task } = require("hardhat/config")

task("block-number", "gives the current blocknumber of the chain", async (taskArgs, hre) => {
    const num = await hre.ethers.provider.getBlockNumber();
    console.log(`The block number is ${num}`);
});

module.exports = {}