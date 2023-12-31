require('dotenv').config();
const hre = require("hardhat");

async function deployRunToken() {
  // Load private key from environment variable
  await hre.run('compile');
  const privateKey = process.env.MNEMONIC;

  if (!privateKey) {
    console.error("Private key not found in .env file");
    process.exit(1);
  }

  // Get the contract factory
  const Greeter = await hre.ethers.getContractFactory("RunToken");

  // Set up the wallet with the private key
  const wallet = new hre.ethers.Wallet(privateKey);

  // Deploy the contract
  const greeter = await Greeter.deploy();
  await greeter.deployed();
  console.log("RunToken deployed to:", greeter.address);

  // Assuming that "mintTokens" is a function in your contract, make sure it exists
  if (greeter.mintTokens) {
    // Call the mintTokens function with some sample parameters
    await greeter.mintTokens("0x06214f2E1e1896739D92F3526Bd496DC028Bd7F9", 55);
    console.log("Run tokens minted");
  } else {
    console.log("mintTokens function not found in the contract");
  }
}

// Run the deployment function and handle errors
deployRunToken()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
