import Web3 from "web3";

async function connectWallet() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    const accounts = await window.ethereum.enable();
    localStorage.setItem("walletConnected", "true");
    return accounts;
  }
}

export { connectWallet };
