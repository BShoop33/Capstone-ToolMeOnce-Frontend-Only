import React, { useContext, useEffect, useState, useRef } from "react"
import { ProfileContext } from "./EditProfileDataProvider.js"
import { useHistory, useParams } from "react-router-dom"
import "./EditProfile.css"

export const ProfilePage = () => {
    const { editProfile, getProfile, getProfileById } = useContext(ProfileContext)

    const [newProfile, setNewProfile] = useState({})

    const { profileId } = useParams()

    const history = useHistory()

    const newEmail = useRef()
    const newAddress = useRef()

    const handleControlledInputChange = (event) => {
        const addedProfile = newProfile
        addedProfile[event.target.name] = event.target.value
        setNewProfile(addedProfile)
    }

    const constructProfileObject = () => {
        editProfile({
            id: newProfile.id,
            email: newEmail.current.value,
            address: newAddress.current.value,
            registrationDate: newProfile.registrationDate
        })
            .then(() => history.push("/Lend"))
    }

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        if (profileId) {
            getProfileById(profileId)
                .then(param => {
                    setNewProfile(param)
                })
        } else { }
    }, [getProfileById, profileId])

    return (
        <>
            <form>
                <div className="ProfileLoginBodyContainer">
                    <div className="ProfileEditContainer">
                        <h2 className="ProfileEditContainerTitle">Edit Profile</h2>
                        <div className="ProfileInputsContainer">
                            <div className="ProfileEditEmailInputBorder">
                                <input type="text"
                                    className="ProfileEditEmailInput"
                                    defaultValue={profileId ? newProfile.email : "Enter your new email address"}
                                    id="ProfileEditEmailInput"
                                    name="ProfileEditEmailInput"
                                    onChange={handleControlledInputChange}
                                    ref={newEmail}
                                />
                            </div>
                            <div className="ProfileEditHomeAddressInputBorder">
                                <input
                                    className="ProfileEditHomeAddressInput"
                                    defaultValue={profileId ? newProfile.address : "Enter your new home address"}
                                    id="ProfileEditHomeAddressInput"
                                    name="ProfileEditHomeAddressInput"
                                    onChange={handleControlledInputChange}
                                    ref={newAddress}
                                    type="text"
                                />
                            </div>
                            <div className="ProfileEditButtonsContainer">
                                <button
                                    className="ProfileSaveChangesButton"
                                    onClick={event => {
                                        event.preventDefault()
                                        constructProfileObject()
                                        history.push(`lend`)
                                    }}
                                    type="button">Save Changes
                            </button>
                                <button
                                    className="ProfileCancelButton"
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
            </form>
        </>
    )
}