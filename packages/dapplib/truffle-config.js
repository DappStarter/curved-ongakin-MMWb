require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift response ridge umbrella hidden enter metal genius'; 
let testAccounts = [
"0xbf7d22d6a8c0ab72cbff6f8cde1f436461686dd0c019364659e676f900ce4184",
"0x1e4a62d88693bd7c5eeecdc609d86b18ece421a8b04fab8a3f1ec04f303e0710",
"0x55d3d0193c3faa101629b81e487dc2c574f591e2bd133c9adaf5de001894e54b",
"0x42dd1372153941f2c6f164dc21be4a24ed62edf8850a8ebd0b121ec26d63a82c",
"0x89ee05f57481df7c3aecc263bafcc0cca992ec216940c7aab5535185aff7e821",
"0xbd1ce03d782b9a0b3b727aea942c6eca9ae6b51c7deeb0b7e19758eecb8c0aad",
"0x098d3be1c0e40cb015892fc6ef9766a69b711eb8ecfb4cdd511e4c50c5941896",
"0xeeb639cf45d237e4e9fb3435abe473ef622ed1b4418e88dce5c276b775a9fe64",
"0x10adab4e3fc2aadb047889c58845dda7e95e064a7a947aebf0a48aa3a1c04189",
"0x8a597207a5edac611dc5a3aac6421623352b2333aefd9c06df523a690aacba50"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

