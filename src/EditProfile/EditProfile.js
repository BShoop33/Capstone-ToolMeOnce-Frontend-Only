import React from "react"
import "./EditProfile.css"
import { useHistory } from "react-router-dom"

export const ProfilePage = () => {
    const history = useHistory();

    return (
        <>
            <main className="main">


                <body className="ProfileLoginBodyContainer">
                    <div className="ProfileEditContainer">
                        <h2 className="ProfileEditContainerTitle">Edit Profile</h2>
                        <div className="ProfileInputsContainer">
                            <div className="ProfileEditEmailInputBorder">
                                <input type="text" id="ProfileEditEmailInput" name="ProfileEditEmailInput" required autoFocus className="ProfileEditEmailInput"
                                    placeholder="Enter your new email address"
                                />
                            </div>
                            <div className="ProfileEditHomeAddressInputBorder">
                                <input type="text" id="ProfileEditHomeAddressInput" name="ProfileEditHomeAddressInput" required autoFocus className="ProfileEditHomeAddressInput"
                                    placeholder="Enter your new home address"
                                />
                            </div>
                            <div className="ProfileEditButtonsContainer">
                                <button className="ProfileSaveChangesButton" type="button">Save Changes</button>
                                <button className="ProfileCancelButton"
                                    onClick={() => { history.push(`/lend`) }}
                                    type="button">Cancel</button>
                            </div>
                        </div>
                    </div>
                </body>
            </main>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}