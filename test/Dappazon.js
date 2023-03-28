const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
  let dappazon;
  let deployer, buyer;

  beforeEach(async ()=>{
    //set up acc

    [deployer, buyer] = await ethers.getSigners();
    //deploy contract
    const DAPPAZON  = await ethers.getContractFactory("Dappazon");
    dappazon = await DAPPAZON.deploy();
  })

  describe("Deployment", () => {
    it('Set the owner', async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    })

    it('has a name', async () => {
      const name = await dappazon.name();
      expect(name).to.equal("Dappazon");
    })
  })
})
