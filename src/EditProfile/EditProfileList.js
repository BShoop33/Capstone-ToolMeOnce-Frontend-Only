
import React, { useContext, useEffect, useState } from "react"
import { ProfileContext } from "./EditProfileDataProvider.js"
import { useHistory, useParams } from "react-router-dom"
import "./EditProfile.css"

export const ProfilePage = () => {
    const { editProfile, getProfile, getProfileById } = useContext(ProfileContext)
    const [profile, setNewProfile] = useState({})
    const { profileId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const addedProfile = { ...profile }
        addedProfile[event.target.name] = event.target.value
        setNewProfile(addedProfile)
    }

    useEffect(() => {
        getProfile().then(() => {
            getProfileById(profileId)
                .then(param => {
                    setNewProfile(param)
                })
        })
    }, [])

    const constructToolObject = () => {
        editProfile({
            id: profile.id,
            email: profile.ProfileEditEmailInput,
            address: profile.ProfileEditHomeAddressInput
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
                            <input type="text" id="ProfileEditEmailInput"
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
                                    constructToolObject()
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


/////////////

// import React, { useContext, useEffect, useState } from "react"
// import { ProfileContext } from "./EditProfileDataProvider.js"
// import { useHistory } from "react-router-dom"
// import "./EditProfile.css"

// export const ProfilePage = () => {
//     const { editProfile, getProfile } = useContext(ProfileContext)
//     const [profile, setNewProfile] = useState({})
//     const history = useHistory()

    // const handleControlledInputChange = (event) => {
    //     const addedProfile = { ...profile }
    //     addedProfile[event.target.name] = event.target.value
    //     setNewProfile(addedProfile)
    // }

    // useEffect(() => {
    //     getProfile().then(() => {
    //         if (profileId) {
    //             getProfileById(profileId)
    //                 .then(param => {
    //                     setNewProfile(param)
    //                     setIsLoading(false)
    //                 })
    //         } else {
    //             setIsLoading(false)
    //         }
    //     })
    // }, [])

    // useEffect(() => {
    //     getProfile()
    // }, [])

    // const constructToolObject = () => {
    //     editProfile({
    //         id: profile.id,
    //         email: profile.ProfileEditEmailInput,
    //         address: profile.ProfileEditHomeAddressInput
    //     })
    //         .then(() => history.push("/Lend"))
    // }

//     return (
//         <>
//             <div className="ProfileLoginBodyContainer">
//                 <div className="ProfileEditContainer">
//                     <h2 className="ProfileEditContainerTitle">Edit Profile</h2>
//                     <div className="ProfileInputsContainer">
//                         <div className="ProfileEditEmailInputBorder">
//                             <input type="text" id="ProfileEditEmailInput"
//                                 name="ProfileEditEmailInput" required autoFocus
//                                 className="ProfileEditEmailInput"
//                                 placeholder="Enter your new email address"
//                                 onChange={handleControlledInputChange}
//                             />
//                         </div>
//                         <div className="ProfileEditHomeAddressInputBorder">
//                             <input
//                                 type="text"
//                                 id="ProfileEditHomeAddressInput"
//                                 name="ProfileEditHomeAddressInput" required autoFocus
//                                 className="ProfileEditHomeAddressInput"
//                                 placeholder="Enter your new home address"
//                                 onChange={handleControlledInputChange}
//                             />
//                         </div>
//                         <div className="ProfileEditButtonsContainer">
//                             <button className="ProfileSaveChangesButton"
//                                 onClick={event => {
//                                     event.preventDefault()
//                                     constructToolObject()
//                                     history.push(`lend`)
//                                 }}
//                                 type="button">Save Changes
//                             </button>
//                             <button className="ProfileCancelButton"
//                                 onClick={() => {
//                                     history.push(`/lend`)
//                                 }}
//                                 type="button">Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
//         </>
//     )
// }