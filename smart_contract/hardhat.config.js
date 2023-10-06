//require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/lQehb2u-8byZ0Y6FPzSF_UMiwTBdYWhZ',
      accounts: ['fb6a29c57ed6c8f45e112671d91fbcd1e4926ffe24ea1a46257d85aac39d1ca2']
    }
  }
};
