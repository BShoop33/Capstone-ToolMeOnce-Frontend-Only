import React, { useContext, useEffect, useState } from "react"
import { EditProfileDetail } from "./ProfileDetail"

export const EditProfileCard = ({ profile }) => (
    <div className="ProfileEditContainer">
        <h2 className="ProfileEditContainerTitle">Edit Profile</h2>
        <div className="ProfileInputsContainer">
            <div className="ProfileEditEmailInputBorder">
                <input type="text"
                    id="ProfileEditEmailInput"
                    name="ProfileEditEmailInput" required autoFocus
                    className="ProfileEditEmailInput"
                    placeholder="Enter your new email address"
                />
            </div>
            <div className="ProfileEditHomeAddressInputBorder">
                <input type="text"
                    id="ProfileEditHomeAddressInput"
                    name="ProfileEditHomeAddressInput" required autoFocus
                    className="ProfileEditHomeAddressInput"
                    placeholder="Enter your new home address"
                />
            </div>
            <EditProfileDetail profile={profile} />
        </div>
    </div>
)