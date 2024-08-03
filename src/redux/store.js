import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
