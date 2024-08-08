import { createAction, createReducer } from "@reduxjs/toolkit";

export const registration = createAction("auth/registration");
export const signIn = createAction("auth/login");
export const logout = createAction("auth/logout");

export const authReducers = createReducer(
    {
        id: localStorage.getItem("id"),
        login: localStorage.getItem("login"), 
        email: localStorage.getItem("email"), 
        isActivated: localStorage.getItem("isActivated"),
        carNumber: localStorage.getItem("carNumber")
    },
    (builder) => 
        builder.addCase(registration, (state, action) => {
            state.id = action.payload.id;
            state.login = action.payload.login;
            state.email = action.payload.email;
            state.isActivated = false;
            state.carNumber = action.payload.carNumber;
            localStorage.setItem("id", action.payload.id);
            localStorage.setItem("login", action.payload.login);
            localStorage.setItem("email", action.payload.email); 
            localStorage.setItem("isActivated", false);
            localStorage.setItem("carNumber", action.payload.carNumber);
        })
        .addCase(signIn, (state, action) => {
            state.id = action.payload.id;
            state.login = action.payload.login;
            state.email = action.payload.email;
            state.isActivated = action.payload.isActivated;
            state.carNumber = action.payload.carNumber;
            localStorage.setItem("id", action.payload.id);
            localStorage.setItem("login", action.payload.login);
            localStorage.setItem("email", action.payload.email);
            localStorage.setItem("isActivated", action.payload.isActivated);
            localStorage.setItem("carNumber", action.payload.carNumber);
        })
        .addCase(logout, (state, action) => {
            localStorage.removeItem("id");
            localStorage.removeItem("login");
            localStorage.removeItem("email"); 
            localStorage.removeItem("isActivated");
            localStorage.removeItem("carNumber");
        })
)

export const selectAuth = (state) => state.auth;