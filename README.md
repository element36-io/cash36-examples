# Cash36 Examples

Examples how to: 

- use element36 to wire-transfer Euro and CHF to smart contracts
- Trigger wire transfers from smart contracts
- Reveal identity of the senders of CHF36 and EUR36


## Aragon: Wire-transfer to a 0x address

Aragon platform supports the management of organizations and communities using Smart Contracts.
With elment36, these organizations can reach out to users without blockchain knowlegde and
use the tradional payment network e.g. for funding purposes, without loosing the 
safety and transparency of blockchain apps. See a list of Aragon Dapps [here](https://poweredby.aragon.org/).  

Test [WALLET-FREE](https://examples.e36.io/src/aragon.html) transfers to Aragon. You may create own contracts or use any ERC20 contract instead. Source of the demo project [here](./src/aragon.html).


## Ethereum: contract initiates wire-transfer

Trigger wire (bank) transfers via Smart Contract. This project contains a demo-contract deloyed on mainnet and several Testnets:  
[Ping-Contract](https://github.com/element36-io/cash36-ping)

Idea is, to reach people without wallets.  How does it work?

Our ERC20 offers following [function](https://github.com/element36-io/cash36-contracts/blob/e15d8b807418e90accda7f36cc03c7f9b5d4dc8b/contracts/Token36.sol#L113):  

```solidity
function transferClue(bytes32 identityClue, uint256 value)
```

Instead of an 0x-adress of a wallet you give a "clue" about the identiy. The clue is evaltuated on the cash36 backend. If the clue can be resolved to an identity, the payment with be done. Either in a wallet or on a bank account. As clue we currently use transaction hashes:

- If a user send funds via cash36 (without wallet like aragon example) our cash36-exchange sends CHF36/EUR36 tokens to a specific address (contract or wallet). 
- This transaction hash can be used later as the identifying clue. 
- The cash36-exchange will trigger the wire (bank) transfer and burns the tokens.

Cash36 contracts are [here](https://github.com/element36-io/cash36-contracts). NPM is [here](https://github.com/element36-io/cash36-contracts/packages).


## Reveal identity of sender

If a user send CHF36 or EUR36 to a 0x wallet, the recipient gets the right to reveal the identity (email, firstname, lastname) of the user. Example:  

```javascript
  const data = await Kyc.revealData(username, password, clue);
```

The clue can be a transaction hash or a wallet address. Check demo source [here](https://github.com/element36-io/cash36-ping/blob/6e5922339353f391e0d350e36154bced5244483c/src/js/dapp.js#L264).

## Onboarding users via API

You can send users to cash36.io or clone our fontend  
[here](https://github.com/element36-io/cash36-frontend) to make your own. The frontend can connect to mainnet or to exsiting contracts on [several](https://github.com/element36-io/cash36-contracts/blob/master/networks.md) testnets.  

You may also use our API [here](https://github.com/element36-io/cash36-frontend/blob/master/doc/src/singlepage.md) to upload KYC data. 

So far, users need to go through _our_ KYC process if you want to use _our_ tokens. By cloning our backend you can create _your_ own Stablecoins and connect them  to _your_ own bank account. Be aware that this has legal consequences, depending in which juristiction you are in.

 Please contact ask@element36.io if you are interested in such a solution.

