import React, { useContext, useEffect, useState, useRef } from "react"
import { ProfileContext } from "./EditProfileDataProvider.js"
import { useHistory, useParams } from "react-router-dom"
import "./EditProfile.css"

export const ProfilePage = () => {
    const { editProfile, getProfile, getProfileById } = useContext(ProfileContext)
    const [newProfile, setNewProfile] = useState({})
    const { profileId } = useParams()
    const history = useHistory()
    const email = useRef()

    const handleLogin = () => {
        localStorage.setItem("ToolMeOnce_Member", email.current.value)
    }

    const handleControlledInputChange = (event) => {
        const addedProfile = { ...newProfile }
        addedProfile[event.target.name] = event.target.value
        setNewProfile(addedProfile)
    }

    useEffect(() => {
        getProfile().then(() => {
            if (profileId) {
                getProfileById(profileId)
                    .then(param => {
                        setNewProfile(param)
                    })
            }
        })
    }, [])

    const constructProfileObject = () => {
        editProfile({
            id: newProfile.id,
            email: newProfile.ProfileEditEmailInput,
            address: newProfile.ProfileEditHomeAddressInput
        })
            .then(() => history.push("/Lend"))
    }

    return (
        <>
            <div className="ProfileLoginBodyContainer">
                <div className="ProfileEditContainer">
                    <h2 className="ProfileEditContainerTitle">Edit Profile</h2>
                    <div className="ProfileInputsContainer">
                        <div className="ProfileEditEmailInputBorder">
                            <input type="text"
                                ref={email}
                                id="ProfileEditEmailInput"
                                name="ProfileEditEmailInput" required autoFocus
                                className="ProfileEditEmailInput"
                                placeholder="Enter your new email address"
                                onChange={handleControlledInputChange}
                            />
                        </div>
                        <div className="ProfileEditHomeAddressInputBorder">
                            <input
                                type="text"
                                id="ProfileEditHomeAddressInput"
                                name="ProfileEditHomeAddressInput" required autoFocus
                                className="ProfileEditHomeAddressInput"
                                placeholder="Enter your new home address"
                                onChange={handleControlledInputChange}
                            />
                        </div>
                        <div className="ProfileEditButtonsContainer">
                            <button className="ProfileSaveChangesButton"
                                onClick={event => {
                                    event.preventDefault()
                                    constructProfileObject()
                                    handleLogin()
                                    history.push(`lend`)
                                }}
                                type="button">Save Changes
                                </button>
                            <button className="ProfileCancelButton"
                                onClick={() => {
                                    history.push(`/lend`)
                                }}
                                type="button">Cancel
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}