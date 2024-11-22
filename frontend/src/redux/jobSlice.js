import { createSlice } from "@reduxjs/toolkit";

const jobSlice=createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        singleJob:null,
        alladminJobs:[],
        searchJobByText:"",
        allAppliedJobs:[],
        searchQuery:""
    },
    reducers:{
        setAllJobs:(state,action)=>{
            state.allJobs=action.payload;
        },
        setSingleJob:(state,action)=>{
            state.singleJob=action.payload;
        },
        setAllAdminJob:(state,action)=>{
            state.alladminJobs=action.payload;
        },
        setsearchJobByText:(state,action)=>{
            state.searchJobByText=action.payload;
        },
        setAllAppliedJobs:(state,action)=>{
            state.allAppliedJobs=action.payload;
        },
        setSearchQuery:((state,action)=>{
            state.searchQuery=action.payload;
        })
    }
});
export const {setAllJobs,setSingleJob,setAllAdminJob,setsearchJobByText,setAllAppliedJobs,setSearchQuery}=jobSlice.actions;
export default jobSlice.reducer;