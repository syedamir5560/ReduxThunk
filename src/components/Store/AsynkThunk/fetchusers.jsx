import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsers = createAsyncThunk('users/getdata', async () => {
    let response = await axios.get(`http://localhost:400/users`)
    return response.data
})