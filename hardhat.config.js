require("@nomicfoundation/hardhat-toolbox");
require ("dotenv");

/*
const API_KEY = p3r8r23wVE1P5IyEuhj9DIb1w5wDeQ8o
const URL_API_ALCHEMY ="https://polygon-mumbai.g.alchemy.com/v2/p3r8r23wVE1P5IyEuhj9DIb1w5wDeQ8o"
const PRIVATE_KEY ="e43b3a17adc64d94d1fc853de996e6b68b70b19bc4c62a53bcae83ffcc7c0fe0"
*/


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/p3r8r23wVE1P5IyEuhj9DIb1w5wDeQ8o",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
