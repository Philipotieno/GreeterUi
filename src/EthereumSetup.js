import Web3 from 'web3';

const web3 = new Web3(
  new Web3.providers.HttpProvider('http://localhost:8545')
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

let greeterAddress = '0x4DbA0268e632ea33d7a78A8aD3A82c9d6F4CB99c';
const greeterContract = web3.eth.contract(greeterABI).at(greeterAddress);
console.log("efwertretrtrwetwer");

export { greeterContract };
