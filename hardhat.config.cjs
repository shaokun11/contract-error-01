require("@nomicfoundation/hardhat-ignition-ethers");
const { vars } = require("hardhat/config");
/** @type import('hardhat/config').HardhatUserConfig */
const key = vars.get("DEPLOYER_PRIVATE_KEY");
module.exports = {
  solidity: "0.8.17",
  networks: {
    m1: {
      url: "https://mevm.devnet.m1.movementlabs.xyz",
      accounts: [key],
      chainId: 336,
    },
    bsctest: {
      url: "https://public.stackup.sh/api/v1/node/bsc-testnet",
      accounts: [key],
      chainId: 97,
      gasPrice: 6*1e9,
      gas: 6*1e6
    }
  },
};
