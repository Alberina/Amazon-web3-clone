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
  })

  describe("Listing", () => {
    let transaction;
    beforeEach(async ()=>{
      transaction = await dappazon.connect(deployer).list(
        1,
        'Shoes',
        'Clothing',
        'image',
        1,
        4,
        5
      )

      await transaction.wait()

    })
    it('Returns the list', async () => {
      const item = await dappazon.items(1);
      expect(item.id).to.equal(1);
    })
  })
})
