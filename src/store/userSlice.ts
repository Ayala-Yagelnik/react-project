import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userType } from '../models/userType';

export const fetchUserById = createAsyncThunk(
    'users/fetchById',
    async (userId: number, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/user/${userId}`);
            return response.data;
        }
        catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState: {
        user:{} as userType
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserById.fulfilled, (state, action) => {
                  console.log('User fetched successfully:', action.payload); 
                state.user = action.payload;
            })
            .addCase(fetchUserById.rejected, () => {
                console.log('failed');
            });
    },
});

export default userSlice;