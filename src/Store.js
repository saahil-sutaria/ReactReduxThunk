import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import fetchProduct from './Actions/fetchProduct'
import reducer from './Reducers/fetchProductReducer'

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(()=> console.log(store.getState()))
store.dispatch(fetchProduct())

export default store;