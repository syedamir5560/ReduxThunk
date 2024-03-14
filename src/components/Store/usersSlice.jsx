import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from './AsynkThunk/fetchusers'




export const userSlice = createSlice({
  name: 'users',
  initialState: { isLoading: 'false', data: 'null', error: 'null' },

  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true
    }),

      builder.addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false
     
        state.data=action.payload
      }),

      builder.addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })
  }


})

// Action creators are generated for each case reducer function


export const usersReducer = userSlice.reducer