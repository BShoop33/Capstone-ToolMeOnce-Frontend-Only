import React, { useContext, useEffect, useState } from "react"
import { ProfileContext } from "./EditProfileDataProvider.js"
import { useParams, useHistory } from "react-router-dom"
import "./EditProfile.css"

export const ProfilePage = () => {
    const { getProfile, getProfileById, editProfile } = useContext(ProfileContext)
    const [profile, setNewProfile] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { profileId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const addedProfile = { ...profile }
        addedProfile[event.target.name] = event.target.value
        setNewProfile(addedProfile)
    }

    useEffect(() => {
        getProfile().then(() => {
            if (profileId) {
                getProfileById(profileId)
                    .then(param => {
                        setNewProfile(param)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructToolObject = () => {
        setIsLoading(true)
        editProfile({
            id: profile.id,
            email: profile.ProfileEditEmailInput,
            address: profile.ProfileEditHomeAddressInput
        })
            .then(() => history.push("/Lend"))
    }
    return (
        <>
            <body className="ProfileLoginBodyContainer">
                <div className="ProfileEditContainer">
                    <h2 className="ProfileEditContainerTitle">Edit Profile</h2>
                    <div className="ProfileInputsContainer">
                        <div className="ProfileEditEmailInputBorder">
                            <input type="text" id="ProfileEditEmailInput" name="ProfileEditEmailInput" required autoFocus className="ProfileEditEmailInput"
                                placeholder="Enter your new email address"
                                onChange={handleControlledInputChange}
                            />
                        </div>
                        <div className="ProfileEditHomeAddressInputBorder">
                            <input type="text" id="ProfileEditHomeAddressInput" name="ProfileEditHomeAddressInput" required autoFocus className="ProfileEditHomeAddressInput"
                                placeholder="Enter your new home address"
                                onChange={handleControlledInputChange}
                            />
                        </div>
                        <div className="ProfileEditButtonsContainer">
                            <button className="ProfileSaveChangesButton"
                                disabled={isLoading}
                                onClick={event => {
                                    event.preventDefault()
                                    constructToolObject()
                                    history.push(`lend`)
                                }}
                                type="button">Save Changes</button>
                            <button className="ProfileCancelButton"
                                onClick={() => { history.push(`/lend`) }}
                                type="button">Cancel</button>
                        </div>
                    </div>
                </div>
            </body>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}
