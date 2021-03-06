import { Actions as AccountActions } from  './account'
import { Actions as ChainActions } from  './chain'
import { Actions as ConsoleAreaActions } from  './chain'

export { SELECT_CHAIN, CHAIN_API_READY, CREATE_API, DISCONNECT_CHAIN, SET_CUSTOM } from './chain'
export { selectChainById, startSelectedChain, setCustom } from './chain'
export { SELECT_ACCOUNT, REQUEST_ACCOUNTS, RECEIVE_ACCOUNTS } from './account'
export { getAccounts, selectAccount } from './account'
export { CLEAR_CONSOLE, ADD_CONSOLE } from './consoleArea'
export { clearConsole, addConsole, addConsoleLine } from './consoleArea'

export type RootActions = ( AccountActions | ChainActions | ConsoleAreaActions )