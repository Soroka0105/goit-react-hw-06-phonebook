import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContactAction: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContactAction: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    filterContactAction: (state, action) => {
      state.contacts = state.contacts.filter(el =>
        el.name.toLowerCase().includes(action.payload)
      );
    },
    filerAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addContactAction,
  deleteContactAction,
  filterContactAction,
  filerAction,
} = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
