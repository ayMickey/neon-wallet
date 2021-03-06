// @flow
export const NEON_WALLET_RELEASE_LINK = 'https://github.com/CityOfZion/neon-wallet/releases'

export const NETWORK = {
  MAIN: 'MainNet',
  TEST: 'TestNet'
}

export const ASSETS = {
  NEO: 'NEO',
  GAS: 'GAS'
}

export const EXPLORERS = {
  NEO_TRACKER: 'Neotracker',
  NEO_SCAN: 'Neoscan',
  ANT_CHAIN: 'Antchain',
  NEO_VERSE: 'NEOVerse'
}

export const ROUTES = {
  HOME: '',
  DASHBOARD: '/dashboard',
  CREATE_WALLET: '/create',
  ENCRYPT_KEY: '/encrypt-key',
  LOGIN_PRIVATE_KEY: '/login-private-key',
  LOGIN_LOCAL_STORAGE: '/login-local-storage',
  LOGIN_LEDGER_NANO_S: '/login-ledger-nano-s',
  LOGIN_NEP2: '/login-encrypted',
  LOGIN_TOKEN_SALE: '/login-token-sale',
  TOKEN_SALE: '/token-sale',
  SETTINGS: '/settings',
  DISPLAY_WALLET_KEYS: '/display-wallet-keys'
}

export const NOTIFICATION_LEVELS = {
  ERROR: 'error',
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning'
}

export const NOTIFICATION_POSITIONS = {
  TOP_CENTER: 'tc',
  TOP_RIGHT: 'tr',
  TOP_LEFT: 'tl',
  BOTTOM_CENTER: 'bc',
  BOTTOM_RIGHT: 'br',
  BOTTOM_LEFT: 'bl'
}

export const BIP44_PATH =
  '8000002C' +
  '80000378' +
  '80000000' +
  '00000000' +
  '00000000'

export const MODAL_TYPES = {
  SEND: 'SEND',
  RECEIVE: 'RECEIVE',
  CONFIRM: 'CONFIRM',
  TOKEN_INFO: 'TOKEN_INFO'
}

// TestNet
export const TOKENS_TEST = {
  RPX: '5b7074e873973a6ed3708862f219a6fbf4d1c411'
}

// MainNet
export const TOKENS = {
  RPX: 'ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9'
}

export const DEFAULT_CURRENCY_CODE = 'usd'

export const CURRENCIES = {
  'aud': { symbol: '$' },
  'brl': { symbol: 'R$' },
  'cad': { symbol: '$' },
  'chf': { symbol: 'Fr.' },
  'clp': { symbol: '$' },
  'cny': { symbol: '¥' },
  'czk': { symbol: 'Kč' },
  'dkk': { symbol: 'kr. ' },
  'eur': { symbol: '€' },
  'gbp': { symbol: '£' },
  'hkd': { symbol: '$' },
  'huf': { symbol: 'Ft ' },
  'idr': { symbol: 'Rp ' },
  'ils': { symbol: '₪' },
  'inr': { symbol: '₹' },
  'jpy': { symbol: '¥' },
  'krw': { symbol: '₩' },
  'mxn': { symbol: '$' },
  'myr': { symbol: 'RM' },
  'nok': { symbol: 'kr ' },
  'nzd': { symbol: '$' },
  'php': { symbol: '₱' },
  'pkr': { symbol: '₨ ' },
  'pln': { symbol: 'zł' },
  'rub': { symbol: '₽' },
  'sek': { symbol: 'kr ' },
  'sgd': { symbol: 'S$' },
  'thb': { symbol: '฿' },
  'try': { symbol: '₺' },
  'twd': { symbol: 'NT$' },
  'usd': { symbol: '$' },
  'zar': { symbol: 'R ' }
}

export const FINDING_LEDGER_NOTICE = 'Looking for USB Devices. Please plugin your device and login.'
