import React, { useRef } from "react"
import "./Login.css"
import { useHistory } from "react-router-dom"
export const LoginPage = (props) => {

    const email = useRef()
    const newemail = useRef()
    const newaddress = useRef()
    const existDialog = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
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
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck2()
            .then((userExists) => {
                if (newemail.current.value === "") {
                    window.alert("Please enter your email address to register")
                }
                else if (newaddress.current.value === "") {
                    window.alert("Please enter your home address to register")
                }
                else if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: newemail.current.value,
                            address: newaddress.current.value
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                // localStorage.setItem("ToolMeOnce_Member", createdUser.id)
                                localStorage.setItem("ToolMeOnce_Member", newemail.current.value)
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
                <dialog className="dialog dialog--auth" ref={existDialog}>
                    <div>User does not exist</div>
                    <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
                </dialog>
                <dialog className="dialog dialog--password" ref={conflictDialog}>
                    <div>Account with that email address already exists</div>
                    <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
                </dialog>
                <header className="LoginPageHeaderContainer">
                    <img className="LoginToolMeOnceLogo" src="Images/ToolMeOnceLogo.jpg.png" alt="Logo" />
                    <div className="LoginToolMeOnceLoginTitleContainer">
                        <h1 className="LoginToolMeOnceTitle">Tool - Me - Once</h1>
                    </div>
                </header>

                <body className="LoginBodyContainer">
                    <div className="LoginExistingUsersContainer">
                        <h2 className="LoginExistingUsersContainerTitle">Existing Users</h2>
                        <div className="LoginExistingEmailInputBorder">
                            <input type="text" ref={email} id="LoginExistingEmailInput" name="LoginExistingEmailInput" required autoFocus className="LoginExistingEmailInput"
                                placeholder="Enter Your Email Address to Log In"
                            />
                        </div>
                        <button className="LoginExistingUserLoginButton" onClick={handleLogin} type="button">Log Into Tool Me Once</button>
                    </div>

                    <div className="LoginNewUsersContainer">
                        <h2 className="LoginNewUsersContainerTitle">New Users</h2>
                        <div className="LoginInputsContainer">
                            <div className="LoginNewUsersEmailInputBorder">
                                <input type="text" ref={newemail} id="LoginNewEmailInput" name="LoginNewEmailInput" required autoFocus className="LoginNewEmailInput"
                                    placeholder="Enter Your Email Address to Register"
                                />
                            </div>
                            <div className="LoginNewUsersHomeAddressInputBorder">
                                <input type="text" ref={newaddress} id="LoginNewHomeAddressInput" name="LoginNewHomeAddressInput" required autoFocus className="LoginNewHomeAddressInput"
                                    placeholder="Enter Your Home Address to Register"
                                />
                            </div>
                            <button className="LoginNewUserLoginButton" onClick={handleRegister} type="button">Register for Tool Me Once</button>
                        </div>

                    </div>
                    <footer className="LoginPageFooter">&copy; Tool Me Once, 2020</footer>
                </body>

            </main>
        </>
    )
}


















// <dialog className="dialog dialog--password" ref={conflictDialog}>
//                 <div>Account with that email address already exists</div>
//                 <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
//             </dialog>

//             <form className="form--login" onSubmit={handleRegister}>
//                 <h1 className="h3 mb-3 font-weight-normal">Please Register for NSS Kennels</h1>
//                 <fieldset>
//                     <label htmlFor="userName"> Username </label>
//                     <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required autoFocus />
//                 </fieldset>
//                 {/* <fieldset>
//                     <label htmlFor="lastName"> Last Name </label>
//                     <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
//                 </fieldset> */}
//                 <fieldset>
//                     <label htmlFor="inputEmail"> Email address </label>
//                     <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
//                 </fieldset>
//                 <fieldset>
//                     <button type="submit"> Sign in </button>
//                 </fieldset>
//             </form>