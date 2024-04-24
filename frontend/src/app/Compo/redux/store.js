"use client"
import {configureStore} from "@reduxjs/toolkit"
import addingslice from "../redux/slice"
const store = configureStore({
    reducer:{
        add : addingslice
    }
    
})
export default store

