function getCoinbase(){
  var coinbase = web3.eth.coinbase;
  console.log('coinbase', coinbase);
  display.clearScreen();
  display.appendText(coinbase)
};

function getBlock(){
  display.clearScreen();
  var blockNumber = web3.eth.blockNumber;
  console.log('blockNumber', blockNumber);
  display.appendText(blockNumber)
};

function watchBalance() {
  var coinbase = web3.eth.coinbase;
  var originalBalance = web3.fromWei(web3.eth.getBalance(coinbase).toNumber(), "ether");
  document.getElementById('original').innerText = ' original balance: ' + originalBalance + '    watching...';
  web3.eth.filter('latest').watch(function() {
    var currentBalance = web3.fromWei(web3.eth.getBalance(coinbase).toNumber(), "ether");
    document.getElementById("current").innerText = 'current: ' + currentBalance;
    document.getElementById("diff").innerText = 'diff:    ' + (currentBalance - originalBalance);
  });
};

function getBalance() {
  display.clearScreen();
  var balance = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase).toNumber(), "ether");
  console.log(balance);
};

var source = " contract test { event Deposit(address from, uint value); function() { if (msg.value > 0) Deposit(msg.sender, msg.value);} } "

var compiled = web3.eth.compile.solidity(source);

var code = compiled.test.code;
// contract json abi, this is autogenerated using solc CLI
var abi = compiled.test.info.abiDefinition;

function createExampleContract() {
    // let's assume that coinbase is our account
    web3.eth.defaultAccount = web3.eth.coinbase;
    // create contract
    document.getElementById('status').innerText = "transaction sent, waiting for confirmation";
    web3.eth.contract(abi).new({data: code}, function (err, contract) {
        if(err) {
            console.error(err);
            return;
        // callback fires twice, we only want the second call when the contract is deployed
        } else if(contract.address){
            myContract = contract;
            console.log('address: ' + myContract.address);
            document.getElementById('status').innerText = 'Mined!';
            document.getElementById('call').style.visibility = 'visible';
        }
    });
};

function callExampleContract() {
  // this should be generated by ethereum
  var param = parseInt(document.getElementById('value').value);
  // call the contract
  var res = myContract.multiply(param);
  document.getElementById('result').innerText = res.toString(10);
};


function watchAllContractEvents(){
  var events = myContract.allEvents().watch({}, '');
};

function watchEvent(){
  var events = myContract.MultipliedBy();
  events.watch(function (error, result) {
    if (error) {
      console.log("Error: " + error);
    } else {
      console.log("Event: " + result);
    }
  })
};

function sendExampleTransaction(value) {
  myContract.multiply.sendTransaction(value, {from: web3.eth.accounts[0]})
};
