var tx = {
  To: '',
  Ammount: ''
}
// the function which handles the input field logic
function getTxData() {
    var address = document.getElementById('inputAddress').value;
    var txvalue = document.getElementById('inputValue').value;
    tx.To = address;
    tx.Ammount = txvalue;
    console.log('txdata', tx);
    wallet.txConstruct(tx.To, tx.Ammount);
    confirm('Verify Transaction Info on Device')
}
// use an eventlistener for the event
var submit = document.getElementById('submit');
submit.addEventListener('click', getTxData, false);

function watchBalance() {
  var coinbase = web3.eth.accounts[1];
  var originalBalance = web3.fromWei(web3.eth.getBalance(coinbase).toNumber(), "ether");
  console.log(' original balance: ' + originalBalance + '    watching...');
  web3.eth.filter('latest').watch(function() {
    var currentBalance = web3.fromWei(web3.eth.getBalance(coinbase).toNumber(), "ether");
    console.log('current: ' + currentBalance);
    console.log('diff:    ' + (currentBalance - originalBalance))
  });
};

watchBalance()
