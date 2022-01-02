require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remind concert hunt robot fringe spike'; 
let testAccounts = [
"0x17fad012e7fe63aaa9267311193f63ec5f229deb9403aa8327b7298b13024098",
"0x5f9f6df1e8b0cd82622c07148a2e2e8f1b0355ce23235631095add66a3c57e33",
"0xd58fdc40f36b584a494ee005b08501ccbd78bd387ea6008ff1cc0e24dcbf02b2",
"0xc1adcd05962d86596f51253d01d245b997c1db45dc12524a08cdbb1d59794847",
"0x97c4c2839d087df3bfa423382cdf4fae17fd4a40c9fbcb251f6c7afc796f15b5",
"0x81e7322cb98166d509aff5afa5efd2e8bcf991aa03a37bfe9124f541457d4381",
"0xd8c16d060983031e0340382d61a957bbc5f0972337f797911732744a0e6b7686",
"0x677ba5e3fbaf744e2e39f06843544a7ca2de2eb92e58f2c6297e6cbe4d622320",
"0x696109930d482b988e813bd40346a1e7ab41953ee34ac526199ade387407aa78",
"0x69749babb9b68b7724516c3dfb6917b928527f1ccdaf881c92c7927b54ff8773"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


