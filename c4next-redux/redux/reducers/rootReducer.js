import { combineReducers } from "redux"; // ไว้สำหรับรวม Reducers
import counterReducer from './counterReducer'

const rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer