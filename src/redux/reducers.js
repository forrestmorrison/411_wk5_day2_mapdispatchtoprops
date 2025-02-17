import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch (action.type) {
        case "ADD_CAR":
            console.log(state);
            return [...state, action.value]
        case "REMOVE_CAR":
            console.log(state);
            let stateCopy = [...state];
            stateCopy.splice(action.value, 1)
            return stateCopy;
    default:
        return state
    }
}

export default combineReducers({ user, cars })