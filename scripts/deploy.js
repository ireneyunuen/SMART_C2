// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  console.log("Smart contract compilando");
  const MyToken= await hre.ethers.getContractFactory("MyToken");
  console.log("Tu Smart Contract está deployando")
  const myToken = MyToken.deploy();

  await myToken.deployed();
  console.log("Enhorabuena, el Smart Contract ha sido deployado a:", myToken.address); 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


