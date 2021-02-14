import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const LoginPage = (props) => {
    const history = useHistory()

    const email = useRef()
    const newemail = useRef()
    const newaddress = useRef()
    const existDialog = useRef()
    const conflictDialog = useRef()
    const conflictDialogAddress = useRef()

    let date = Date();

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/UsersTable?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("ToolMeOnce_Member", exists.id)
                    history.push("/lend")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    const existingUserCheck2 = () => {
        return fetch(`http://localhost:8088/UsersTable?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck2()
            .then((userExists) => {
                if (newemail.current.value === "") {
                    conflictDialog.current.showModal("Please enter your email address to register")
                }
                else if (newaddress.current.value === "") {
                    conflictDialogAddress.current.showModal("Please enter your home address to register")
                }
                else if (!userExists) {
                    fetch("http://localhost:8088/UsersTable", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: newemail.current.value,
                            address: newaddress.current.value,
                            registrationDate: date
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("ToolMeOnce_Member", createdUser.id)
                                history.push("/lend")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
    }

    return (
        <>
            <main className="container--login">
                <dialog className="DialogExisting" ref={existDialog}>
                    <div>Oops! It looks like we don't have a user record for you. Please register as a new user in the New User field below.</div>
                    <button
                        className="ButtonCloseExisting"
                        onClick={e => existDialog.current.close()}
                    >Close
                    </button>
                </dialog>

                <dialog className="DialogNewEmail" ref={conflictDialog}>
                    <div>Please enter your email address to register</div>
                    <button
                        className="ButtonCloseNewEmail"
                        onClick={e => conflictDialog.current.close()}
                    >Close
                    </button>
                </dialog>

                <dialog className="DialogNewEmail" ref={conflictDialogAddress}>
                    <div>Please enter your home address to register</div>
                    <button
                        className="ButtonCloseNewEmail"
                        onClick={e => conflictDialogAddress.current.close()}
                    >Close
                    </button>
                </dialog>

                <header className="LoginPageHeaderContainer">
                    <img alt="Logo" className="LoginToolMeOnceLogo" src="Images/ToolMeOnceLogo.jpg.png" />
                    <div className="LoginToolMeOnceLoginTitleContainer">
                        <h1 className="LoginToolMeOnceTitle">Tool - Me - Once</h1>
                    </div>
                </header>

                <div className="LoginBodyContainer">
                    <div className="LoginExistingUsersContainer">
                        <h2 className="LoginExistingUsersContainerTitle">Existing Users</h2>
                        <div className="LoginExistingEmailInputBorder">
                            <input
                                className="LoginExistingEmailInput"
                                id="LoginExistingEmailInput"
                                name="LoginExistingEmailInput" required autoFocus
                                placeholder="Enter Your Email Address to Log In"
                                ref={email}
                                type="text"
                            />
                        </div>
                        <button
                            className="LoginExistingUserLoginButton"
                            onClick={handleLogin}
                            type="button">Log Into Tool Me Once
                        </button>
                    </div>
                    <div className="LoginNewUsersContainer">
                        <h2 className="LoginNewUsersContainerTitle">New User</h2>
                        <div className="LoginInputsContainer">
                            <div className="LoginNewUsersEmailInputBorder">
                                <input type="text"
                                    className="LoginNewEmailInput"
                                    id="LoginNewEmailInput"
                                    name="LoginNewEmailInput"
                                    placeholder="Enter Your Email Address to Register"
                                    ref={newemail}
                                />
                            </div>
                            <div className="LoginNewUsersHomeAddressInputBorder">
                                <input type="text"
                                    className="LoginNewHomeAddressInput"
                                    id="LoginNewHomeAddressInput"
                                    name="LoginNewHomeAddressInput"
                                    placeholder="Enter Your Home Address to Register"
                                    ref={newaddress}
                                />
                            </div>
                            <button
                                className="LoginNewUserLoginButton"
                                onClick={handleRegister}
                                type="button">Register for Tool Me Once
                            </button>
                        </div>
                    </div>
                    <footer className="LoginPageFooter">&copy; Tool Me Once, 2020</footer>
                </div>
            </main>
        </>
    )
}