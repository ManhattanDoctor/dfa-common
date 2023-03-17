export * from './LedgerCoinBridge';
export * from './LedgerCoinBridgeDeposit';
export * from './LedgerCoinBridgeWithdrawal';

export let ETHS = {
    "ETH": {
        "endpoint": 'http://127.0.0.1:7545',
        "contractAddress": '0x79C90675143217266a0Af796B1619237f52dA111',
        "contractAbi": [
            {
                "inputs": [],
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
                                "name": "objectUid",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "coinUid",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "date",
                                "type": "uint256"
                            }
                        ],
                        "indexed": false,
                        "internalType": "struct HlfBridge.Deposit",
                        "name": "data",
                        "type": "tuple"
                    }
                ],
                "name": "Deposited",
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
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "date",
                                "type": "uint256"
                            }
                        ],
                        "indexed": false,
                        "internalType": "struct HlfBridge.Withdrawal",
                        "name": "data",
                        "type": "tuple"
                    }
                ],
                "name": "Withdrew",
                "type": "event"
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
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "deposits",
                "outputs": [
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
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
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
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "withdrawals",
                "outputs": [
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
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
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
                "name": "refund",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "balanceGet",
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
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    }
                ],
                "name": "depositsGet",
                "outputs": [
                    {
                        "components": [
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
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "date",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct HlfBridge.Deposit[]",
                        "name": "",
                        "type": "tuple[]"
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
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "withdrawalsGet",
                "outputs": [
                    {
                        "components": [
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
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "date",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct HlfBridge.Withdrawal[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            }
        ]
    }
}