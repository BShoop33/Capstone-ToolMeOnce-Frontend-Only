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


/////////////
// import React, { useContext, useEffect, useState } from "react"
// import { LendContext } from "./LendDataProvider.js"
// import { useHistory, useParams } from 'react-router-dom';
// import "./Lend.css"

// export const LendForm = () => {
//     const { getTools, getToolById, editTools, addTools } = useContext(LendContext)
//     const { toolId } = useParams()
//     const [Tool, setNewTool] = useState({})
//     const [isLoading, setIsLoading] = useState(true)
//     const history = useHistory()

//     const handleControlledInputChange = (event) => {
//         const addedTool = { ...Tool }
//         addedTool[event.target.name] = event.target.value
//         setNewTool(addedTool)
//     }

//     useEffect(() => {
//         getTools().then(() => {
//             if (toolId) {
//                 getToolById(toolId)
//                     .then(Tool => {
//                         setNewTool(Tool)
//                         setIsLoading(false)
//                     })
//             } else {
//                 setIsLoading(false)
//             }
//         })
//     }, [])

//     const constructToolObject = () => {
//         setIsLoading(true)
//         if (toolId) {
//             editTools({
//                 id: Tool.id,
//                 userid: localStorage.getItem("ToolMeOnce_Member"),
//                 borrowerid: Tool.borrowerid,
//                 imageurl: Tool.imageurl,
//                 toolstatus: Tool.toolstatus,
//                 toolname: Tool.AddToolNameInput,
//                 tooldescription: Tool.AddToolDescriptionInput,
//                 toolspecs: Tool.AddToolSpecificationsInput,
//                 toolaccessories: Tool.AddToolAccessoriesInput
//             })
//                 .then(() => history.push("/Lend"))
//         } else {
//             addTools({
//                 id: Tool.id,
//                 userid: localStorage.getItem("ToolMeOnce_Member"),
//                 borrowerid: Tool.borrowerid,
//                 imageurl: Tool.imageurl,
//                 toolstatus: true,
//                 toolname: Tool.AddToolNameInput,
//                 tooldescription: Tool.AddToolDescriptionInput,
//                 toolspecs: Tool.AddToolSpecificationsInput,
//                 toolaccessories: Tool.AddToolAccessoriesInput
//             })
//                 .then(() => history.push("/Lend"))
//         }
//     }

//     return (
//         <>
//             <div className="addToolMain">
//                 <div className="AddTool">
//                     <h2 className="AddToolTitle">{toolId ? "Edit Tool" : "Add a Tool"}</h2>
//                     <div className="NewToolContainer">
//                         <div className="NewToolInputs">
//                             <div className="AddToolNameInputBorder">
//                                 <input type="text"
//                                     id="AddToolNameInput"
//                                     name="AddToolNameInput" required autoFocus
//                                     className="AddToolNameInput"
//                                     onChange={handleControlledInputChange}
//                                     placeholder="Enter your tool's name here"
//                                 />
//                             </div>
//                             <div className="AddToolDescriptionInputBorder">
//                                 <textarea
//                                     id="AddToolDescriptionInput"
//                                     name="AddToolDescriptionInput" required autoFocus
//                                     className="AddToolDescriptionInput"
//                                     onChange={handleControlledInputChange}
//                                     placeholder="Enter your tool's description here"
//                                 />
//                             </div>
//                             <div className="AddToolSpecificationsInputBorder">
//                                 <textarea
//                                     id="AddToolSpecificationsInput"
//                                     name="AddToolSpecificationsInput" required autoFocus
//                                     className="AddToolSpecificationsInput"
//                                     onChange={handleControlledInputChange}
//                                     placeholder="Enter your tool's specifications here"
//                                 />
//                             </div>
//                             <div className="AddToolAccessoriesInputBorder">
//                                 <textarea
//                                     id="AddToolAccessoriesInput"
//                                     name="AddToolAccessoriesInput" required autoFocus
//                                     className="AddToolAccessoriesInput"
//                                     onChange={handleControlledInputChange}
//                                     placeholder="Enter your tool's accessories here"
//                                 />
//                             </div>
//                             <div className="AddToolButtonsContainer">
//                                 <button className="AddToolSaveButton"
//                                     disabled={isLoading}
//                                     onClick={event => {
//                                         event.preventDefault()
//                                         constructToolObject()
//                                         history.push(`/lend`)
//                                     }}
//                                     type="button">Save Tool
//                                 </button>
//                                 <button className="AddToolCancelButton"
//                                     onClick={() => {
//                                         history.push(`/lend`)
//                                     }}
//                                     type="button">Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
//         </>
//     )
// }