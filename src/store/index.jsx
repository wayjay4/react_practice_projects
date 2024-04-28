import {configureStore} from "@reduxjs/toolkit";
import dummyReducer from "./slices/dummy-slice";

const store = configureStore({
    reducer: {
        dummy: dummyReducer,
    },
})

export default store;