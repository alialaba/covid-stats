import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async ()=>{

    // return fetch("https://covidnigeria.herokuapp.com/api").then((res)=> 
    //     res.json()
    // );



    const response = await fetch("https://covidnigeria.herokuapp.com")
      const data = await response.json();
      return data;
})

const postSlice = createSlice(({

    name: "posts",

    initialState: {
            posts:[],
            loading:false,
            error:""
    },
    
    extraReducers:{
        //fetch data from api on pending
        [getPosts.pending]:(state, action)=>{
            state.loading = true;
        },
        [getPosts.fulfilled]:(state, action)=>{
            state.loading = false;
            state.posts= action.payload;
        },
        [getPosts.rejected]:(state, action)=>{
            state.loading = false;
            
        },
    },
}))

export default postSlice.reducer;