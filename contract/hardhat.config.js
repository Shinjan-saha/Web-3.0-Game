require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",

  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com", // Replace with your actual RPC URL
      accounts: ["c5053501342508420c9e39b3b147f8b7c930707855f4d6d9202b92e3f4845c27"], // Replace with your actual private key
    },
  },
};
