import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './Phonebook/phonebook-reducer';

const store = configureStore({
    reducer: {
        contacts: phonebookReducer,
    },
});

export default store;


