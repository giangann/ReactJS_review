export const Increment = (value) => {
    return {
        type: "INCREMENT",
        payload:{
            value:value
        }
    }
}

export const Decrement = (value) => {
    return {
        type: "DECREMENT",
        payload:{
            value:value
        }
    }
}

export const ChangeInputValue = (value) => {
    return {
        type: "CHANGE_VALUE",
        payload:{
            newvalue: value
        }
    }
}