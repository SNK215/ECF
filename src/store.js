import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./routes/authentication/authSlice";
import imcSlice from "./routes/imcForm/imcSlice";

const store = configureStore({
    reducer : {
        authSlice: authSlice,
        imcSlice: imcSlice
    }
})

export default store