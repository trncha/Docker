import {createStore, applyMiddleware, compose} from 'redux'
// createStore = จะเป็นการเอาข้อมูลทุกอย่างเก็บลง store ของ redux
// applyMiddleware = จะเป็นการเรียก redux thunk ต่างๆเพื่อที่จะเอาตัว store ไปเก็บ
import thunk from 'redux-thunk'
import {createWrapper} from 'next-redux-wrapper'
import rootReducer from './reducers/rootReducer'

const middleware = [thunk] 
// middleware คือตัวที่จะใช้การส่งค่าเป็นตัวกลางอีกทีนึง ในการส่งค่าจาก action หา reducer เคสนี้ใช้ redux-thunk เป็นการส่งค่า
const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// ไว้ใช้ดู redux ผ่าน browser dev-tool

const makeStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore)