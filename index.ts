import Wallet from "./wallet/Wallet";
import * as apiHelpers from './wallet/apiHelpers'
import bitcoreKaspaSetup from './wallet/bitcoreKaspaSetup';

// module.exports.Wallet = Wallet;
// module.exports.bitcoreKaspaSetup = bitcoreKaspaSetup;
exports.Wallet = Wallet;
exports.bitcoreKaspaSetup = bitcoreKaspaSetup;
exports.apiHelpers = apiHelpers;

// export default {Wallet, bitcoreKaspaSetup, apiHelpers}