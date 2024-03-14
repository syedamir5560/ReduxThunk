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


export const deletUsers = createAsyncThunk('users/deletdata', async(para) => {
    let response = await axios.delete(`http://localhost:400/users/${para.id}`)
    return response.data
})