
import { configureStore } from '@reduxjs/toolkit';
import CollegeSlice from '../slice/CollegeSlice';
 

const store = configureStore({
  reducer: {
    college: CollegeSlice.reducer 
  }
});

export default store;
