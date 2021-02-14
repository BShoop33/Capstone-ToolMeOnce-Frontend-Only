import React, { useContext, useEffect, useState, useRef } from "react"
import { LendContext } from "./LendDataProvider.js"
import { useHistory, useParams } from 'react-router-dom';
import "./Lend.css"

export const LendForm = () => {
    const { addTools, editTools, getToolById, getTools } = useContext(LendContext)

    const { toolId } = useParams()

    const [Tool, setNewTool] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const toolPicture = useRef();
    const toolName = useRef();
    const toolDescription = useRef();
    const toolSpecs = useRef();
    const toolAccessories = useRef();

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

    const constructToolObject = () => {
        setIsLoading(true)
        if (toolId) {
            editTools({
                id: Tool.id,
                userid: parseInt(localStorage.getItem("ToolMeOnce_Member")),
                lenderId: parseInt(localStorage.getItem("ToolMeOnce_Member")),
                borrowerId: Tool.borrowerid,
                toolstatus: Tool.toolstatus,
                toolname: toolName.current.value,
                toolpicture: image === "" ? Tool.toolpicture : image,
                tooldescription: toolDescription.current.value,
                toolspecs: toolSpecs.current.value,
                toolaccessories: toolAccessories.current.value
            })
                .then(() => history.push("/Lend"))
        } else {
            addTools({
                id: Tool.id,
                lenderId: parseInt(localStorage.getItem("ToolMeOnce_Member")),
                borrowerid: Tool.borrowerid,
                toolstatus: true,
                toolpicture: image ? image : "/Images/ToolMeOnceLogo.jpg.png",
                toolname: Tool.AddToolNameInput,
                tooldescription: Tool.AddToolDescriptionInput,
                toolspecs: Tool.AddToolSpecificationsInput,
                toolaccessories: Tool.AddToolAccessoriesInput
            })
                .then(() => history.push("/Lend"))
        }
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
                                        <img alt="Tool Picture" className="NewToolPictureForm" src={image ? image : Tool.toolpicture} />
                                    )
                                }
                                <h1 className="UploadTitle">Upload Image</h1>
                                <input
                                    className="ToolPictureFileInput"
                                    defaultValue={image}
                                    name="file"
                                    onChange={uploadImage}
                                    placeholder="Upload an image"
                                    ref={toolPicture}
                                    type="file"
                                />
                            </div>
                        </div>

                        <div className="NewToolInputs">
                            <div className="AddToolNameInputBorder">
                                <input
                                    className="AddToolNameInput"
                                    defaultValue={toolId ? Tool.toolname : "Enter your tool's name here"}
                                    id="AddToolNameInput"
                                    name="AddToolNameInput" required autoFocus
                                    onChange={handleControlledInputChange}
                                    ref={toolName}
                                    type="text"
                                />
                            </div>
                            <div className="AddToolDescriptionInputBorder">
                                <textarea
                                    autoFocus
                                    className="AddToolDescriptionInput"
                                    defaultValue={toolId ? Tool.tooldescription : "Enter your tool's description here"}
                                    id="AddToolDescriptionInput"
                                    name="AddToolDescriptionInput"
                                    onChange={handleControlledInputChange}
                                    ref={toolDescription}
                                    required
                                />
                            </div>
                            <div className="AddToolSpecificationsInputBorder">
                                <textarea
                                    autoFocus
                                    className="AddToolSpecificationsInput"
                                    defaultValue={toolId ? Tool.toolspecs : "Enter your tool's specifications here"}
                                    id="AddToolSpecificationsInput"
                                    name="AddToolSpecificationsInput"
                                    onChange={handleControlledInputChange}
                                    ref={toolSpecs}
                                    required
                                />
                            </div>
                            <div className="AddToolAccessoriesInputBorder">
                                <textarea
                                    autoFocus
                                    className="AddToolAccessoriesInput"
                                    defaultValue={toolId ? Tool.toolaccessories : "Enter your tool's accessories here"}
                                    id="AddToolAccessoriesInput"
                                    name="AddToolAccessoriesInput"
                                    onChange={handleControlledInputChange}
                                    ref={toolAccessories}
                                    required
                                />
                            </div>
                            <div className="AddToolButtonsContainer">
                                <button
                                    className="AddToolSaveButton"
                                    disabled={isLoading, loading}
                                    onClick={event => {
                                        event.preventDefault()
                                        constructToolObject()
                                        history.push(`/lend`)
                                    }}
                                    type="button">Save Tool
                                </button>
                                <button
                                    className="AddToolCancelButton"
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