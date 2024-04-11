import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null, 
        topRatedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        //actions
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovie:(state,action)=>{
            state.popularMovie = action.payload;
        },
        getTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        }
    }
});

export const {getNowPlayingMovies,getPopularMovie,getTopRatedMovies,getUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;