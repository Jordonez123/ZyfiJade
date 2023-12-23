import { legacy_createStore } from 'redux';
import formReducer from './reducer';

const store = legacy_createStore(formReducer);

export default store;