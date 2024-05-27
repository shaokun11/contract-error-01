const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("CompetitionFactoryModule", (m) => {
  const deployer = m.getAccount(0);
  const factory = m.contract("CompetitionFactory", [deployer]);
  return { factory };
});