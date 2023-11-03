import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    isLoading:false,
    responseData:[]
}
export const getHomedata = createAsyncThunk("homedata/getHomedata",async(_,thunkAPI)=>{
    try {
        const res = await axios.get("https://movies-api14.p.rapidapi.com/home",{
            headers: {
                'X-RapidAPI-Key': 'c412656846msh4e3dba92fa2bedcp181cbcjsn431805c2e33f',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
              }
        })
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

const homeDataSlice = createSlice({
    name:"home",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(getHomedata.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getHomedata.fulfilled, (state, action) => {
            state.isLoading = false;
            state.responseData = action.payload;
          })
          .addCase(getHomedata.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message; // You can handle error data here
          });
      }
})

export default homeDataSlice.reducer