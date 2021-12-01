import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchContactsAPI,
    addContactAPI,
    deleteContactsAPI,
} from '../../services/contactApi';

axios.defaults.baseURL = 'https://61a78099387ab200171d2d46.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const contacts = await fetchContactsAPI();
        return contacts;
    },
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async result => {
        const contacts = await addContactAPI(result);
        return contacts;
    },
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async id => {
        await deleteContactsAPI(id);
        return id;
    },
);