import {combineReducers} from 'redux';
import productReducer from '../reducers/products'

const allReducers = combineReducers({
    products: productReducer,

})

export default allReducers;