import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    darkTheme:false,
    product:[],
    userData:undefined
    
}

export const customReducer = createReducer(initialState,{
    changeTheme:(state,action)=>{
        state.darkTheme = !state.darkTheme
    },
    getFilteredProducts:(state , action)=>{
        state.product = action.payload
    },
    setUser:(state , action)=>{
        state.userData = action.payload
    }
})