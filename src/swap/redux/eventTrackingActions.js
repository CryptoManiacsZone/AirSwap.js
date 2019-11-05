// This file is generated code, edits will be overwritten
const abi = require('../../abiMapping/swap.js')
const constants = require('../../constants')

export const trackSwapAuthorizeSender = ({
  callback,
  authorizerAddress,
  authorizedSender,
  fromBlock,
  backFillBlockCount,
} = {}) => ({
  callback,
  contract: constants.SWAP_CONTRACT_ADDRESS,
  abi,
  name: 'AuthorizeSender',
  params: { authorizerAddress, authorizedSender },
  fromBlock,
  backFillBlockCount,
  type: 'TRACK_EVENT',
  namespace: 'swap',
})

export const trackSwapAuthorizeSigner = ({
  callback,
  authorizerAddress,
  authorizedSigner,
  fromBlock,
  backFillBlockCount,
} = {}) => ({
  callback,
  contract: constants.SWAP_CONTRACT_ADDRESS,
  abi,
  name: 'AuthorizeSigner',
  params: { authorizerAddress, authorizedSigner },
  fromBlock,
  backFillBlockCount,
  type: 'TRACK_EVENT',
  namespace: 'swap',
})

export const trackSwapCancel = ({ callback, nonce, signerWallet, fromBlock, backFillBlockCount } = {}) => ({
  callback,
  contract: constants.SWAP_CONTRACT_ADDRESS,
  abi,
  name: 'Cancel',
  params: { nonce, signerWallet },
  fromBlock,
  backFillBlockCount,
  type: 'TRACK_EVENT',
  namespace: 'swap',
})

export const trackSwapInvalidate = ({ callback, nonce, signerWallet, fromBlock, backFillBlockCount } = {}) => ({
  callback,
  contract: constants.SWAP_CONTRACT_ADDRESS,
  abi,
  name: 'Invalidate',
  params: { nonce, signerWallet },
  fromBlock,
  backFillBlockCount,
  type: 'TRACK_EVENT',
  namespace: 'swap',
})

export const trackSwapRevokeSender = ({
  callback,
  authorizerAddress,
  revokedSender,
  fromBlock,
  backFillBlockCount,
} = {}) => ({
  callback,
  contract: constants.SWAP_CONTRACT_ADDRESS,
  abi,
  name: 'RevokeSender',
  params: { authorizerAddress, revokedSender },
  fromBlock,
  backFillBlockCount,
  type: 'TRACK_EVENT',
  namespace: 'swap',
})

export const trackSwapRevokeSigner = ({
  callback,
  authorizerAddress,
  revokedSigner,
  fromBlock,
  backFillBlockCount,
} = {}) => ({
  callback,
  contract: constants.SWAP_CONTRACT_ADDRESS,
  abi,
  name: 'RevokeSigner',
  params: { authorizerAddress, revokedSigner },
  fromBlock,
  backFillBlockCount,
  type: 'TRACK_EVENT',
  namespace: 'swap',
})

export const trackSwapSwap = ({ callback, nonce, signerWallet, senderWallet, fromBlock, backFillBlockCount } = {}) => ({
  callback,
  contract: constants.SWAP_CONTRACT_ADDRESS,
  abi,
  name: 'Swap',
  params: { nonce, signerWallet, senderWallet },
  fromBlock,
  backFillBlockCount,
  type: 'TRACK_EVENT',
  namespace: 'swap',
})
