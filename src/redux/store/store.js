import { configureStore } from "@reduxjs/toolkit"

import contactReducer from '../reducers/contacts/contactSlice';

const store = configureStore({
    reducer: {
        contact: contactReducer,
    },
});

export default store;

