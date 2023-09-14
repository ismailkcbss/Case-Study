import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:{
            name:"",
            email:"",
            password:"",
            password_confirmatio:"",
        },
        access_token:"",
    },
    reducers:{
        set:(state,action) => {
            state.user = {...action.payload.user};
        },
        login:(state,action) => {
            state.user = {...action.payload.user};
            state.access_token = action.payload.access_token;
        },
        logout:(state) => {
            state.user = {
                id:"",
                name:"",
                email:"",
                password:"",
                password_confirmatio:"",
            };
            state.access_token = "";
        },

    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;