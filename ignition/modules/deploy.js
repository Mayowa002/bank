const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {
  const lock = m.contract("Bank");

  console.log(typeof lock);
  console.log(lock);
  return { lock };
});


// npx hardhat ignition deploy ./ignition/modules/Lock.js --network localhost // localhost

// what if we want to deploy to sepolia...pending....

