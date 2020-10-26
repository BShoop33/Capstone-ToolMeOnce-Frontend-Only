import React, { useState, createContext } from "react"
export const LendContext = createContext()

export const LendProvider = (props) => {
    const [tool, setTools] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getTools = () => {
        return fetch("http://localhost:8088/Toolstable")
            .then(res => res.json())
            .then(setTools)
    }

    const addTools = (tools) => {
        return fetch("http://localhost:8088/Toolstable", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tools)
        })
            .then(getTools)
    }





    const getToolById = (id) => {
        return fetch(`http://localhost:8088/Toolstable/${id}`)
            .then(res => res.json())

    }

    const DeleteTool = (toolId) => {
        return fetch(`http://localhost:8088/Toolstable/${toolId}`, {
            method: "DELETE"
        })
            .then(getTools)
    }

    const editTools = tool => {
        return fetch(`http://localhost:8088/Toolstable/${tool.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tool)
        })
            .then(getTools)
    }

    return (
        <LendContext.Provider value={{
            tool, addTools, getTools, getToolById, DeleteTool, editTools, searchTerms, setSearchTerms
        }}>
            {props.children}
        </LendContext.Provider>
    )
}