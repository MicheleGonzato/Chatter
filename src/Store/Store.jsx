import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./Reducers/Messages.reducers";

export const store = configureStore({
    reducer: {
        messages: messagesReducer,
    }
});


