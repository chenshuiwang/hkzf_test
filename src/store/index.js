import reducer from './reducer'
import thunk from 'redux-thunk'
import {legacy_createStore,applyMiddleware} from 'redux'
export default legacy_createStore(reducer,applyMiddleware(thunk))