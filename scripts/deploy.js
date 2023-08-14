const { ethers, run, network } = require("hardhat");

async function main() {

  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  console.log("Deploying contract...");

  const simpleStorage = await SimpleStorageFactory.deploy();

  await simpleStorage.waitForDeployment();

  const add = await simpleStorage.getAddress();

  console.log(`Deployed contract to: ${add}`);


  if (network.config.chainId === 5 && process.env.escankey) {
    console.log("waiting for block confirmations");

    await simpleStorage.deploymentTransaction().wait(6);

    console.log("waiting is done,proceeding to next step");

    await verify(add, []);
  }
  const txresponse = await simpleStorage.store("7");

  await txresponse.wait(1);

  const value = await simpleStorage.retrieve();

  console.log(`The value is ${value}`);
}

async function verify(address, args) {
  try {
    await run("verify:verify", { address: address, constructorArguments: args });
  }
  catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}
main();