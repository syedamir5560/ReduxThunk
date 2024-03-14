import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsers = createAsyncThunk('users/getdata', async () => {
    let response = await axios.get(`http://localhost:400/users`)
    return response.data
})

export const postUsers = createAsyncThunk('users/postdata', async(para) => {
    let response = await axios.post(`http://localhost:400/users`, para)
    return response.data
})