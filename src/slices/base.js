import { createSelector, createSlice } from '@reduxjs/toolkit'

export const baseSlice = createSlice({
    name: 'base',
    initialState: {
        value: 0,
        name: "Bog",
        lastName: "Valk",

    },
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// export const selectValue = state => state.base.value

// export const selectFullName = createSelector([
//     state => state.base.name,
//     state => state.base.lastName
// ], (name, lastName) => {
//     // do something with a, b, and c, and return a result
//     return name + lastName
// })



// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = baseSlice.actions

export default baseSlice.reducer