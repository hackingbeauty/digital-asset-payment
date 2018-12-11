pragma solidity ^0.4.24;

contract ProofOfExistence {
  mapping (string => bool) private proofs;

  function registerAsset(string assetHash) public {
    proofs[assetHash] = true;
  }

  function checkIfRegistered(string assetHash) public view returns (bool) {
    return proofs[assetHash];
  }

}
