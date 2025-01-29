import {configureStore} from '@reduxjs/toolkit'
import UserSlice from '../slices/UserSlice'

const Store = configureStore({
    reducer: {
        userInfo: UserSlice
    }
})

export default Store