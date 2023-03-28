import * as _ from 'lodash';

export let ETH_EVENT = 'Operation';

export enum EthEventType {
    WITHDREW = 'Withdrew',
    DEPOSITED = 'Deposited',
}

let ETHS = [
    {
        "id": "ETH",
        "decimals": 18,
        "isDisabled": false,
        "blockFrequency": 10000,
        "endpoint": 'https://goerli.infura.io/v3/6198cde58cf540e5b1d08802ca7372cc',
        "contractAddress": '0xD4a57032aff20334e947DB070b699Ab6fc9C2a2d',
        "contractAbi": []
    },
    {
        "id": "ETH",
        "decimals": 18,
        "isDisabled": true,
        "blockFrequency": 3000,
        "endpoint": 'http://127.0.0.1:7545',
        "contractAddress": '0xe356847C20Efd0e2686B7a4186b3a49F45CE3b95',
        "contractAbi": []
    }
]

let ETH_ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "_decimals",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "_depositMin",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_withdrawalMin",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "coinUid",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "objectUid",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "internalType": "struct CoinBridge.OperationDto",
                "name": "data",
                "type": "tuple"
            }
        ],
        "name": "Operation",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "validator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "total",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "internalType": "struct CoinBridge.ValidatorDto",
                "name": "data",
                "type": "tuple"
            }
        ],
        "name": "ValidatorAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "validator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "total",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "internalType": "struct CoinBridge.ValidatorDto",
                "name": "data",
                "type": "tuple"
            }
        ],
        "name": "ValidatorRemoved",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "depositMin",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "validators",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "validatorsTotal",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "withdrawalMin",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "objectUid",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "coinUid",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "message",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "objectUid",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "coinUid",
                "type": "string"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "objectUid",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "coinUid",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes[]",
                "name": "signatures",
                "type": "bytes[]"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "validator",
                "type": "address"
            }
        ],
        "name": "validatorHas",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "validator",
                "type": "address"
            }
        ],
        "name": "validatorAdd",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "validator",
                "type": "address"
            }
        ],
        "name": "validatorRemove",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "depositMinSet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "withdrawalMinSet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "balance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]

export function getEths(): typeof ETHS {
    let items = new Array();
    for (let item of ETHS) {
        if (_.isEmpty(item.contractAbi)) {
            item.contractAbi = ETH_ABI;
        }
        items.push(item);
    }
    return items;
}