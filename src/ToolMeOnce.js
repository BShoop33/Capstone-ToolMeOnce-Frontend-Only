import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationView"
import { LoginPage } from "./Login/LoginForm.js"

export const ToolMeOnce = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("ToolMeOnce_Member")) {
                    return (
                        <>
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <LoginPage />
                }
            }}
        />
    </>
);