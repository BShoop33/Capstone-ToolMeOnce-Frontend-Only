import React, { useContext, useEffect, useState } from "react"
import { LendContext } from "./LendDataProvider.js"
import { useHistory, useParams } from 'react-router-dom';
import "./Lend.css"

export const LendForm = () => {
    const { getTools, getToolById, editTools, addTools } = useContext(LendContext)
    const { toolId } = useParams()
    const [Tool, setNewTool] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'ToolMeOnce')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dstfvbrwf/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
    }

    const handleControlledInputChange = (event) => {
        const addedTool = { ...Tool }
        addedTool[event.target.name] = event.target.value
        setNewTool(addedTool)
    }

    useEffect(() => {
        getTools().then(() => {
            if (toolId) {
                getToolById(toolId)
                    .then(Tool => {
                        setNewTool(Tool)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])


    // localStorage.getItem("ToolMeOnce_Member")


    const constructToolObject = () => {
        setIsLoading(true)
        if (toolId) {
            editTools({
                id: Tool.id,
                userid: parseInt(localStorage.getItem("ToolMeOnce_Member")),
                borrowerid: Tool.borrowerid,
                toolstatus: Tool.toolstatus,
                toolname: Tool.AddToolNameInput,
                toolpicture: image,
                tooldescription: Tool.AddToolDescriptionInput,
                toolspecs: Tool.AddToolSpecificationsInput,
                toolaccessories: Tool.AddToolAccessoriesInput
            })
                .then(() => history.push("/Lend"))
        } else {
            addTools({
                id: Tool.id,
                userid: parseInt(localStorage.getItem("ToolMeOnce_Member")),
                borrowerid: Tool.borrowerid,
                toolstatus: true,
                toolpicture: image,
                toolname: Tool.AddToolNameInput,
                tooldescription: Tool.AddToolDescriptionInput,
                toolspecs: Tool.AddToolSpecificationsInput,
                toolaccessories: Tool.AddToolAccessoriesInput
            })
                .then(() => history.push("/Lend"))
        }
    }

    return (
        <>
            <div className="AddToolMain">
                <div className="AddTool">
                    <h2 className="AddToolTitle">{toolId ? "Edit Tool" : "Add a Tool"}</h2>
                    <div className="NewToolContainer">
                        <div className="NewToolPictureContainer">
                            <div className="NewToolPicture">
                                {loading ? (
                                    <h3 className="NewToolPictureLoading">Loading . . .</h3>
                                ) : (
                                        <img className="NewToolPictureForm" src={image ? image : "/Images/ToolMeOnceLogo.jpg.png"} />
                                    )
                                }
                                <h1 className="UploadTitle">Upload Image</h1>
                                <input
                                    className="ToolPictureFileInput"
                                    type="file"
                                    name="file"
                                    placeholder="Upload an image"
                                    onChange={uploadImage}
                                />
                            </div>
                        </div>

                        <div className="NewToolInputs">
                            <div className="AddToolNameInputBorder">
                                <input type="text"
                                    id="AddToolNameInput"
                                    name="AddToolNameInput" required autoFocus
                                    className="AddToolNameInput"
                                    onChange={handleControlledInputChange}
                                    placeholder={toolId ? Tool.toolname : "Enter your tool's name here"}
                                />
                            </div>
                            <div className="AddToolDescriptionInputBorder">
                                <textarea
                                    id="AddToolDescriptionInput"
                                    name="AddToolDescriptionInput" required autoFocus
                                    className="AddToolDescriptionInput"
                                    onChange={handleControlledInputChange}
                                    placeholder={toolId ? Tool.tooldescription : "Enter your tool's description here"}
                                />
                            </div>
                            <div className="AddToolSpecificationsInputBorder">
                                <textarea
                                    id="AddToolSpecificationsInput"
                                    name="AddToolSpecificationsInput" required autoFocus
                                    className="AddToolSpecificationsInput"
                                    onChange={handleControlledInputChange}
                                    placeholder={toolId ? Tool.toolspecs : "Enter your tool's specifications here"}
                                />
                            </div>
                            <div className="AddToolAccessoriesInputBorder">
                                <textarea
                                    id="AddToolAccessoriesInput"
                                    name="AddToolAccessoriesInput" required autoFocus
                                    className="AddToolAccessoriesInput"
                                    onChange={handleControlledInputChange}
                                    placeholder={toolId ? Tool.toolaccessories : "Enter your tool's accessories here"}
                                />
                            </div>
                            <div className="AddToolButtonsContainer">
                                <button className="AddToolSaveButton"
                                    disabled={isLoading, loading}
                                    onClick={event => {
                                        event.preventDefault()
                                        constructToolObject()
                                        history.push(`/lend`)
                                    }}
                                    type="button">Save Tool
                                </button>
                                <button className="AddToolCancelButton"
                                    onClick={() => {

                                        history.push(`/lend`)
                                    }}
                                    type="button">Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}