const os = require('os');

const printOsInfo = () => {
  console.log(`OS name: ${os.name}`);
  console.log(`OS release: ${os.release}`);
};

printOsInfo();