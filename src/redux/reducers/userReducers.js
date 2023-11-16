import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const { login, reLogin, logout, updateUser } = userActions;

const initialState = {
    id: '',
    name: '',
    role: '',
    email: '',
    online: false,
    token: '',
    user: {},
    verified: '',
};

const userReducers = createReducer(initialState, (builder) => {
    builder
        .addCase(login.fulfilled, (state, action) => {
            const { success, response } = action.payload;
            if (success) {
                const { user, token } = response;
                localStorage.setItem("token", JSON.stringify({ token: token }));
                return { ...state, user, id: user.id, name: user.name, email: user.email, role: user.role, online: true, token: token, verified: user.verified };
            } else {
                return { ...state, message: response };
            }
        })
        .addCase(reLogin.fulfilled, (state, action) => {
            const { success, response } = action.payload;
            if (success) {
                const { user, token } = response;
                return { ...state, user: user.user, id: user.id, name: user.name, email: user.email, role: user.role, online: true, token: token, verified: user.verified};
            } else {
                return { ...state, message: response };
            }
        })
        .addCase(logout.fulfilled, (state, action) => {
            const { success, response } = action.payload;
            if (success) {
                localStorage.removeItem("token");
                return { ...state, id: '', name: '', email: '', role: '', online: false, token: '', user: {} };
            } else {
                return { ...state, message: response };
            }
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            const { success, response } = action.payload;
            if (success) {
                return { ...state, user: response };
            } else {
                return { ...state, message: response };
            }
        });
});

export default userReducers;