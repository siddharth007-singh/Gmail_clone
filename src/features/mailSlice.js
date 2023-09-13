import {createSlice } from '@reduxjs/toolkit';


const initialState = {
  selectedMail : null,
  sendMessageIsOpen: false,
  status: 'idle',
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {

    selectedMail:(state, action)=>{
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const {openSendMessage, closeSendMessage, selectedMail} = mailSlice.actions;

export const selectsendMessageIsOpen =(state)=> state.mail.sendMessageIsOpen;
export const selectOpenMail = (state)=>state.mail.selectedMail;

export default mailSlice.reducer;

