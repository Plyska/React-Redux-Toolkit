import axios from "axios";
import { User } from "../../types/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkApi) => {
    try {
        const response = await axios.get<User[]>(`${process.env.REACT_APP_URL as string}/users`);
        return response.data
    } catch (e) {
        return thunkApi.rejectWithValue('Something went wrong');
    }
})