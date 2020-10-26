import React, { useContext, useEffect, useState } from "react"
import { ProfileContext } from "./EditProfileDataProvider.js"
import "./EditProfile.css"

import { useParams, useHistory } from "react-router-dom"

export const EditProfileCard = ({ profileParam }) => {
    const history = useHistory();
    const [profile, setProfile] = useState({})
    const { profileId } = useParams();
    const { getProfileById } = useContext(ProfileContext)

    useEffect(() => {
        getProfileById(profileId)
            .then((response) => {
                setProfile(response)
            })
    }, [])


    return (
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
    )
}