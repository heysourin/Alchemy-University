const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

const { toHex } = require("ethereum-cryptography/utils");

const privateKey = secp.utils.randomPrivateKey();

console.log(`Private key: ${toHex(privateKey)}`);

const publicKey = secp.getPublicKey(privateKey);
console.log(`Public key: ${toHex(publicKey)}`);

const hexedPublicKey = toHex(publicKey);
const walletAddress = (hexedPublicKey.slice(1)).slice(-20);
console.log("Wallet Address: ",walletAddress);
