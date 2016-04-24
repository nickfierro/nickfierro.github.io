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
