// scripts/deploy.ts
import {ethers} from "hardhat";

async function main() {
  // deploy the token contract

//   const token = await ethers.deployContract("MyToken");
//   await token.waitForDeployment();
//   const tokenAddress = await token.getAddress();
//   console.log(`Token contract deployed on: ${tokenAddress}`);

  // deploy the bridge contract
  const contractFactory = await ethers.getContractFactory("Bridge");
  const bridge = await contractFactory.deploy("0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238");
  
  await bridge.waitForDeployment();
  const bridgeAddress = await bridge.getAddress();
  console.log(`Bridge contract deployed on: ${bridgeAddress}`);
  // fund the bridge contract with some tokens
//   await token.transfer(bridgeAddress, ethers.parseEther('1000'));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});