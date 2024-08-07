import { createAction, createReducer } from "@reduxjs/toolkit";

export const registration = createAction("auth/registration");
export const signIn = createAction("auth/login");
export const logout = createAction("auth/logout");

export const authReducers = createReducer(
    {
        login: localStorage.getItem("login"), 
        email: localStorage.getItem("email"), 
        isActivated: localStorage.getItem("isActivated"),
        carNumber: localStorage.getItem("carNumber")
    },
    (builder) => 
        builder.addCase(registration, (state, action) => {
            state.login = action.payload.login;
            state.email = action.payload.email;
            state.isActivated = false;
            state.carNumber = action.payload.carNumber;
            localStorage.setItem("login", action.payload.login);
        })
        .addCase(signIn, (state, action) => {
            state.login = action.payload.login;
            state.email = action.payload.email;
            state.isActivated = action.payload.isActivated;
            state.carNumber = action.payload.carNumber;
            localStorage.setItem("login", action.payload.login);
        })
        .addCase(logout, (state, action) => {
            localStorage.removeItem("login");
        })
)

export const selectAuth = (state) => state.auth;