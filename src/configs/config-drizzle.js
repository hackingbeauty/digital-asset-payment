import ProofOfExistence from 'contracts/ProofOfExistence.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    ProofOfExistence
  ],
  events: {
  },
  polls: {
    accounts: 1500 /* 1.5 seconds polling for account changes in MetaMask */
  }
}

export default drizzleOptions
