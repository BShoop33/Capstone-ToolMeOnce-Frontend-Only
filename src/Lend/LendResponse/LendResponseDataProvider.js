import React, { useState, createContext } from "react"
export const LendResponseContext = createContext()

export const LendResponseProvider = (props) => {
    const [response, setResponse] = useState([])

    const addResponse = (param) => {
        return fetch("http://localhost:8088/Messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
            .then(getResponse)
    }

    const DeleteResponse = (param) => {
        return fetch(`http://localhost:8088/Messages/${param}`, {
            method: "DELETE"
        })
            .then(getResponse)
    }

    const getResponse = () => {
        return fetch(`http://localhost:8088/Messages?userid=${localStorage.getItem("ToolMeOnce_Member")}`)
            .then(res => res.json())
            .then(setResponse)
    }

    // const getToolById = (param) => {
    //     return fetch(`http://localhost:8088/Toolstable/${param}`)
    //         .then(res => res.json())
    // }

    return (
        <LendResponseContext.Provider value={{
            response, addResponse, DeleteResponse, getResponse
        }}>
            {props.children}
        </LendResponseContext.Provider>
    )
}