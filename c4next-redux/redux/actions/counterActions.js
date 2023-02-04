// Action type
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

// Action Create
// function เอาไว้เรียกจากตัว components
export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
})

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
})