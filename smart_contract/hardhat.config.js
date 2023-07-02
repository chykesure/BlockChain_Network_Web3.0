//https://eth-mainnet.g.alchemy.com/v2/1fWjiz4lhWZm1nq0TItxWzQRpaj91RZ4

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/jIaKVwdVJQcizmcs9o8Ip3DT1AHk4o83',
           
      accounts: [ 'bbd9b66fb0ba0da9a2cba8b5527579787709a1e4bcf75f04420626c2ddf27f79' ]
    }
  }
}
