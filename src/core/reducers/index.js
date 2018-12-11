import { combineReducers } from 'redux'
import { accountReducer }  from 'core/reducers/reducer-account'
import { assetReducer }    from 'core/reducers/reducer-asset'
import { providerReducer } from 'core/reducers/reducer-provider'
import { uiReducer }       from 'core/reducers/reducer-ui'
import { drizzleReducers } from 'drizzle'

const rootReducer = combineReducers({
  account: accountReducer,
  asset: assetReducer,
  provider: providerReducer,
  ui: uiReducer,
  ...drizzleReducers
})

export default rootReducer
