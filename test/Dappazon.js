const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
  it('has a name', async () => {
    const DAPPAZON  = await ethers.getContractFactory("Dappazon");
    dappazon = await DAPPAZON.deploy();
    expect(await dappazon.name()).to.equal("Dappazon");
  })
})
