import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://63d13172d5f0fa7fbdc61864.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
async () => {
    const response = await axios.get('/contacts');
    return response.data;
    
})