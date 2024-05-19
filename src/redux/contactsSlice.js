import { createSlice, createSelector } from "@reduxjs/toolkit"
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import {selectFilter} from '../redux/filtersSlice'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        add: {
            reducer: (state, action) => {
                state.items = [...state.items, action.payload]
            },
        },

        remove: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    },

    extraReducers: (builder) => 
        builder 
            .addCase(fetchContacts.pending, (state) =>{
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) =>{
                state.items =action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state) =>{
                state.error = true;
                state.loading = false;
            })
            .addCase(addContact.pending, (state) =>{
                state.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) =>{
                state.items = [action.payload, ...state.items];
                state.loading = false;
            })
            .addCase(addContact.rejected, (state)=>{
                state.error = true;
                state.loading = false;
            })
            .addCase(deleteContact.pending, (state) =>{
                state.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => {
                    return item.id!==action.payload.id});
                state.loading = false
            })
            .addCase(deleteContact.rejected, (state)=>{
                state.error = true;
                state.loading = false;
            })
})

export const selectContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts ,selectFilter],
    (contacts, filterValue) => {
        return contacts.filter(contact => 
              contact.name.toLowerCase().includes(filterValue.toLowerCase())
              );
    }
)

export default contactsSlice.reducer

