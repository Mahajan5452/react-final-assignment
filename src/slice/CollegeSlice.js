import { createSlice } from "@reduxjs/toolkit";

const initialState={
    colleges: []
}
const CollegeSlice = createSlice({
    name: 'college',
    initialState,
    reducers:{
        getList:(state,action)=>{
           
            state.colleges = action.payload;
        },
        addCollege: (state,action)=>{
            state.colleges.push(action.payload);
        },  
        deleteCollegeById:(state,action)=>{
            const id=action.payload;
            console.log(id);
            state.colleges = state.colleges.filter((item) => item.id !== id);
           console.log(state.colleges);
        },
        
        updateCollege: (state,action)=>{
            const updatedCollege = action.payload;
            const index = state.colleges.findIndex(college => college.id === updatedCollege.id);
            if (index !== -1) {
                state.colleges[index] = updatedCollege;
            }
        },
        addnewBranch: (state,action)=>{
            const { id, branch } = action.payload;
           console.log(branch,id);
           const index = state.colleges.findIndex(college => college.id == id);
           
            console.log(index);
            if(index!==-1){
                state.colleges[index].branches.push(branch);
            }
        },
        updateBranch: (state,action)=>{
            const { id,bid, branch } = action.payload;
            const index = state.colleges.findIndex(college => college.id == id);
            if(index!==-1){
              const branchIndex=  state.colleges[index].branches.findIndex(branch=> branch.id == bid);
              if(branchIndex!==-1){
                state.colleges[index].branches[branchIndex]=branch;
              }
            }
        },
        deletebranch: (state,action)=>{
            const { id, bid } = action.payload;
            console.log(bid);
            const index = state.colleges.findIndex(college => college.id == id);
            if(index!==-1){
                console.log("index is not null");
                state.colleges[index].branches = state.colleges[index].branches.filter((item) => item.id !== bid);
            }
        },
    } 
})
export const { getList, addCollege,deleteCollegeById,addnewBranch ,updateBranch,deletebranch} = CollegeSlice.actions;        
export default CollegeSlice;
