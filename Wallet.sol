contract Wallet {
  address public owner;

  struct Transaction {
    address to;
    uint value;
  }

  event ConfirmationNeeded(bytes32 operation, address initiator, uint value, address to);

  function Wallet(){
    owner = msg.sender;
  }

  function txConstruct (address _to, uint _value) external returns (bytes32 _r) {
    _r = sha3(msg.data, block.number);
    m_txs[_r].to = _to;
    m_txs[_r].value = _value;
    ConfirmationNeeded(_r, msg.sender, _value, _to);
  }

  mapping (bytes32 => Transaction) m_txs;
}
