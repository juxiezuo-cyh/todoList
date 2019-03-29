import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//调用控制台的调试工具
export default store;
