import { getExplorerTxLink, openExplorerTx } from '../../app/core/explorer'
import { NETWORK, EXPLORERS } from '../../app/core/constants'
import { shell } from 'electron'

describe('explorer tests', () => {
  describe('getExplorerTxLink tests', () => {
    test('NeoTracker mainnet explorer test', () => {
      const net = NETWORK.MAIN
      const explorer = EXPLORERS.NEO_TRACKER
      const txId = '1234567890abcdef'
      const expectedUrl = 'https://neotracker.io/tx/1234567890abcdef'
      expect(getExplorerTxLink(net, explorer, txId)).toEqual(expectedUrl)
    })

    test('NeoTracker testnet explorer test', () => {
      const net = NETWORK.TEST
      const explorer = EXPLORERS.NEO_TRACKER
      const txId = '1234567890abcdef'
      const expectedUrl = 'https://testnet.neotracker.io/tx/1234567890abcdef'
      expect(getExplorerTxLink(net, explorer, txId)).toEqual(expectedUrl)
    })

    test('NeoScan mainnet explorer test', () => {
      const net = NETWORK.MAIN
      const explorer = EXPLORERS.NEO_SCAN
      const txId = '1234567890abcdef'
      const expectedUrl = 'https://neoscan.io/transaction/1234567890abcdef'
      expect(getExplorerTxLink(net, explorer, txId)).toEqual(expectedUrl)
    })

    test('NeoScan testnet explorer test', () => {
      const net = NETWORK.TEST
      const explorer = EXPLORERS.NEO_SCAN
      const txId = '1234567890abcdef'
      const expectedUrl = 'https://neoscan-testnet.io/transaction/1234567890abcdef'
      expect(getExplorerTxLink(net, explorer, txId)).toEqual(expectedUrl)
    })

    test('AntChain mainnet explorer test', () => {
      const net = NETWORK.MAIN
      const explorer = EXPLORERS.ANT_CHAIN
      const txId = '1234567890abcdef'
      const expectedUrl = 'http://antcha.in/tx/hash/1234567890abcdef'
      expect(getExplorerTxLink(net, explorer, txId)).toEqual(expectedUrl)
    })

    test('AntChain testnet explorer test', () => {
      const net = NETWORK.TEST
      const explorer = EXPLORERS.ANT_CHAIN
      const txId = '1234567890abcdef'
      const expectedUrl = 'http://testnet.antcha.in/tx/hash/1234567890abcdef'
      expect(getExplorerTxLink(net, explorer, txId)).toEqual(expectedUrl)
    })

    test('NEOVerse mainnet explorer test', () => {
      const net = NETWORK.MAIN
      const explorer = EXPLORERS.NEO_VERSE
      const txId = '1234567890abcdef'
      const expectedUrl = 'http://explorer.neoverse.io/transactions/1234567890abcdef'
      expect(getExplorerTxLink(net, explorer, txId)).toEqual(expectedUrl)
    })

    test('NEOVerse testnet explorer test', () => {
      const net = NETWORK.TEST
      const explorer = EXPLORERS.NEO_VERSE
      const txId = '1234567890abcdef'
      const expectedUrl = 'http://testnet.neoverse.io/transactions/1234567890abcdef'
      expect(getExplorerTxLink(net, explorer, txId)).toEqual(expectedUrl)
    })
  })

  describe('openExplorerTx tests', () => {
    test('open NeoTracker mainnet explorer test', () => {
      const net = NETWORK.MAIN
      const explorer = EXPLORERS.NEO_TRACKER
      const txId = '1234567890abcdef'
      const expectedUrl = 'https://neotracker.io/tx/1234567890abcdef'
      const spy = jest.spyOn(shell, 'openExternal')

      openExplorerTx(net, explorer, txId)
      expect(spy).toHaveBeenCalledWith(expectedUrl)
    })
  })
})
