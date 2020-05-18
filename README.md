# Cash36 Examples

Examples how to use element36 to wire-transfer Euro and CHF to  Smart Contracts. 


## Aragon: Wire-transfer --> 0x

Aragon platform supports the management of organizations and communities using Smart Contracts.
With elment36, these organizations can reach out to users without blockchain knowlegde and
use the tradional payment network e.g. for funding purposes, without loosing the 
safety and transparency of blockchain apps. See a list of Aragon Dapps [here](https://poweredby.aragon.org/).  



[Wire-transfer to Aragon](https://examples.e36.io/src/aragon.html) 

[Source](./src/aragon.html) of the demo project. 
 

## Ethereum: 0x --> initiate wire-transfer

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



## Cash Exchange


Clone and modify our exchange [here](https://github.com/element36-io/cash36-frontend). It can connect to mainnet or testnets.


Create your own Stablecoins based on your own bank account - please contact ask@element36.io. 


