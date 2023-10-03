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
           const index = state.colleges.findIndex(college => college.id.toString() === id);
           
            console.log(index);
            // con
            // if (college) {
            //     college.branches = [...college.branches, branch];
            //   }
        }
    } 
})
export const { getList, addCollege,deleteCollegeById,addnewBranch } = CollegeSlice.actions;        
export default CollegeSlice;
