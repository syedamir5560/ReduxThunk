import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'users',
  initialState:{isLoading:'false',data:'null',error:'null'},
  

})

// Action creators are generated for each case reducer function


export const usersReducer = userSlice.reducer