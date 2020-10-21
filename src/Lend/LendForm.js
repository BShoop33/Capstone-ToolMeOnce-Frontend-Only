import React, { useContext, useEffect, useState } from "react"
import { LendContext } from "./LendDataProvider.js"
import { useHistory, useParams } from 'react-router-dom';
import "./Lend.css"

export const LendForm = () => {
    const { getTools, getToolById, editTools, addTools, deleteTool } = useContext(LendContext)

    const [Tool, setNewTool] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { toolId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const addedTool = { ...Tool }

        addedTool[event.target.name] = event.target.value
        setNewTool(addedTool)
    }

    useEffect(() => {
        getTools().then(() => {
            if (toolId) {
                getToolById(toolId)
                    .then(NewTool => {
                        setNewTool(NewTool)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    let toolspecs;
    let toolaccessories;

    const constructToolObject = () => {
        setIsLoading(true)
        if (toolId) {
            editTools({
                id: Tool.id,
                userId: Tool.userid,
                borrowerid: Tool.borrowerid,
                imageurl: Tool.imageurl,
                toolname: Tool.toolname,
                tooldescription: Tool.tooldescription,
                toolspecs: toolspecs,
                toolaccessories: toolaccessories
            })
                .then(() => history.push("/Lend"))
        }
        else {
            addTools({
                id: Tool.id,
                userId: Tool.userid,
                borrowerid: Tool.borrowerid,
                imageurl: Tool.imageurl,
                toolname: Tool.toolname,
                tooldescription: Tool.tooldescription,
                toolspecs: toolspecs,
                toolaccessories: toolaccessories
            })
                .then(() => history.push("/Lend"))
        }
    }

    return (
        console.log("Test")
    )
}