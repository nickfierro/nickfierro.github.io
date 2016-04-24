var walletAbi = web3.eth.contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"txConstruct","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"}],"name":"ConfirmationNeeded","type":"event"}]);

var contractAddress = '0xb16466886593f159fa1cdb0c3ba1f98ba92a22e5';

var wallet = walletAbi.at(contractAddress);
