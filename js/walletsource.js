var incomingTx = {
  ammount: '',
  to: '',
  initiator: '',
  opHash: ''
};

var incomingTxEvent = new Event('tx');


function collectTxDetails(result){
  incomingTx.ammount = Number(result.args.value);
  incomingTx.to = result.args.to;
  incomingTx.initiator = result.args.initiator;
  incomingTx.opHash = result.args.operation;
  console.log('incoming transaction', incomingTx);
  window.dispatchEvent(incomingTxEvent);
};

function confirmAndSend() {
  if ((confirm("CONFIRM TRANSACTION To: " + incomingTx.to + "\n Ammount: " + incomingTx.ammount + "Ether") === true) && (incomingTx.to.length > 5)) {
    web3.eth.sendTransaction({from: web3.eth.coinbase, to: incomingTx.to, value: web3.toWei(incomingTx.ammount, 'ether')}, function(err, res) {
      if (!err) alert("You sent a Transaction!! Your reciept is: " + res);
    });
  } else {
      alert("You pressed Cancel!");
  }
};

window.addEventListener('tx', function(e) {
  console.log(e); // Prints "Example of an event"
  confirmAndSend();
});

var walletContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"txConstruct","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"}],"name":"ConfirmationNeeded","type":"event"}]);

var wallet = walletContract.new(
  {
    from: web3.eth.accounts[0],
    data: '60606040525b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b6101ef8061003f6000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480638b367709146100445780638da5cb5b1461007957610042565b005b61006360048080359060200190919080359060200190919050506100b2565b6040518082815260200191505060405180910390f35b61008660048050506101c9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600036436040518084848082843782019150508281526020019350505050604051809103902090508050826001600050600083815260200190815260200160002060005060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508160016000506000838152602001908152602001600020600050600101600050819055507ff74287890ebcaf2d919089fc80a0755a265bc8fb7611d72f48af7fc78073715481338486604051808581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200194505050505060405180910390a15b92915050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156',
    gas: 3000000
  },
  function(e, contract){
    console.log(e, contract);
    if (typeof contract.address != 'undefined') {
      console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
      alert(contract.address);
      console.log("I'm Watching for Incoming TX's");
      wallet.ConfirmationNeeded().watch(function(error,result){
        if (!error) {
          collectTxDetails(result)
        }
      });
    }
});
