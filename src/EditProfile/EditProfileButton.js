import React, { useContext } from "react"
import { ProfileContext } from "./EditProfileDataProvider"
import { useHistory } from "react-router-dom"
import "./EditProfile.css"

export const EditProfileButton = ({ profile }) => {
    const history = useHistory();

    return (
        <>

            <button className="LendEditProfile"
                onClick={() => {
                    history.push(`/lend/editprofile/${profile.id}`)
                }}
                type="button">Edit Profile
            </button>
        </>
    )
}