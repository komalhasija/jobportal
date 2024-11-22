import {createSlice} from '@reduxjs/toolkit'

const companySlice=createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
        searchCompanyByTest:"",
    },
    reducers:{
        setSingleCompany:(state,action)=>{
            state.singleCompany=action.payload;
        },
        setCompanies:(state,action)=>{
            state.companies=action.payload;
        },
        setSearchCompanyByTest:(state,action)=>{
            state.searchCompanyByTest=action.payload;
        }
    }
});
export const {setSingleCompany,setCompanies,setSearchCompanyByTest}=companySlice.actions;
export default companySlice.reducer;