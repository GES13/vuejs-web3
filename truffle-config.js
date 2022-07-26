const HDWalletProvider = require("@truffle/hdwallet-provider");
const seed_phrase = ''
const infura_rinkeby_link = ""

module.exports = {
    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        privatebc: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "4224"
        },
        rinkeby: {
            provider: () => new HDWalletProvider(seed_phrase, infura_rinkeby_link),
            // port: 8545,
            network_id: "4",
            gas: 5500000,
            confirmations:2,
            skipDryRun: true
          },        
    }
};
