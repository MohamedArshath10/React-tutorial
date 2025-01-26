import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"

const Store = configureStore({
    reducer: {
        userInfo: userReducer,
    },
})

export default Store