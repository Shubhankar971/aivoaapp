import { createSlice } from "@reduxjs/toolkit";

const interactionSlice = createSlice({

  name:"interaction",

  initialState:{
    mode:"form",
    extractedData:null
  },

  reducers:{

    setMode:(state,action)=>{
      state.mode = action.payload
    },

    setExtractedData:(state,action)=>{
      state.extractedData = action.payload
    }

  }

})

export const {setMode,setExtractedData} = interactionSlice.actions;

export default interactionSlice.reducer