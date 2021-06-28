import Web3 from 'web3';
import React, { Component } from 'react';

const web3 = new Web3(
  new Web3.providers.HttpProvider('https://localhost:8545')
);

let greeterABI = [
  {
    constant: true,
    inputs: [],
    name: 'greeting',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'greet',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'string', name: '_greeting', type: 'string' }],
    name: 'greeter',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

let greeterAddress = '0xc00d9f1bE67084Cd99bEc6Fe56C326965079b745';
const greeterContract = web3.eth.Contract(greeterABI).at(greeterAddress);

export { greeterContract };

export default class EthereumSetup extends Component {
  render() {
    return <div></div>;
  }
}
