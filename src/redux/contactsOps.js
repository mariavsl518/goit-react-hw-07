import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6646327f51e227f23aae2eda.mockapi.io';

export const fetchContacts = createAsyncThunk('fetchAll', 
        async (_, thunkAPI) => {
            try {
                const resp = await axios.get('/contacts');
                return resp.data
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message)
            }
        })

export const addContact = createAsyncThunk('addContact', 
        async (newContact, thunkAPI) => {
            try {
                const resp = await axios.post('/contacts', newContact);
                return resp.data
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message)
            }
        })

export const deleteContact = createAsyncThunk('deleteContact',
        async (id, thunkAPI) => {
            try {
                const resp = await axios.delete(`/contacts/${id}`);
                // повертає об'єкт, який видалявся
                return resp.data
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message)
            }
        })