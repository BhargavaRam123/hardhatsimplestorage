const { ethers } = require("hardhat")
const { expect, assert } = require("chai")
describe("SimpleStorage", function () {

  let simpleStorage, SimpleStorageFactory
  beforeEach(async function () {

    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

    simpleStorage = await SimpleStorageFactory.deploy();
  })

  it("favourate number Should start with zero", async function () {
    const value = await simpleStorage.retrieve();

    const expectedvalue = "0";

    assert.equal(value.toString(), expectedvalue);

  })
})