contract Wallet {
  address public owner;

  struct Transaction {
    address to;
    uint value;
    bytes data;
  }

  event ConfirmationNeeded(bytes32 operation, address initiator, uint value, address to, bytes data);
  event Transact(address owner, bytes32 operation, uint value, address to, bytes data);
  event Deposit(address from, uint value);

  function Wallet(){
    owner = msg.sender;
  }

  function() {
      // just being sent some cash?
      if (msg.value > 0)
          Deposit(msg.sender, msg.value);
  }

  function txConstruct (address _to, uint _value, bytes _data) external returns (bytes32 _r) {
    _r = sha3(msg.data, block.number);
    m_txs[_r].to = _to;
    m_txs[_r].value = _value;
    m_txs[_r].data = _data;
    ConfirmationNeeded(_r, msg.sender, _value, _to, _data);
  }

  function confirm(bytes32 _h) returns (bool) {
      if (m_txs[_h].to != 0) {
          m_txs[_h].to.call.value(m_txs[_h].value)(m_txs[_h].data);
          Transact(msg.sender, _h, m_txs[_h].value, m_txs[_h].to, m_txs[_h].data);
          delete m_txs[_h];
          return true;
      }
  }

  mapping (bytes32 => Transaction) m_txs;
}
