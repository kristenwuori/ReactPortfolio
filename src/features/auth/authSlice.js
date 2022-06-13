import { createSlice, creatAsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import React from 'react';
import Redux from 'react-redux';

// Get user from local storage
const user = JSON.parse(sessionStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            return {
                loading: false,
                success: false,
                error: false,
                message: ''
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, {payload}) => {
                if(payload) {
                    return {
                        ...state, 
                        loading: false,
                        success: true,
                        error: false,
                    }
                } else return state;
                }
            )
            .addCase(register.rejected, (state, {payload}) => {
                if(payload) {
                    return {
                        ...state,
                        loading: false,
                        error: true,
                        message: payload,
                        user: null
                    }
                }
            })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;


