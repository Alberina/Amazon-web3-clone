const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
  let dappazon;

  beforeEach(async ()=>{
    //deploy contract
    const DAPPAZON  = await ethers.getContractFactory("Dappazon");
    dappazon = await DAPPAZON.deploy();
  })

  describe("Deployment", () => {
    it('has a name', async () => {
      const name = await dappazon.name();
      expect(name).to.equal("Dappazon");
    })
  })
})
