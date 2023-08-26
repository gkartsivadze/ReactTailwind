import { configureStore } from "@reduxjs/toolkit"

export const TOGGLE = () => {
    return {
        type: "TOGGLE"
    }
}

export const ADD = () => {
    return {
        type: "ADD"
    }
}

export const MINUS = () => {
    return {
        type: "MINUS"
    }
}

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case "ADD":
            return state + 1
        case "MINUS":
            return state - 1
        default:
            return state
    }
}

const onOffReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE":
            return !state
        default:
            return state
    }
}

export const store = configureStore({
    reducer: {
        number: counterReducer,
        onOff: onOffReducer
    }
})