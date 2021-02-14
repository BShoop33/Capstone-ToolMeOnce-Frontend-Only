import React, { useState, createContext } from "react"
export const ReplyContext = createContext()

export const ReplyProvider = (props) => {
    const [reply, setReply] = useState([])

    const addReply = (param) => {
        return fetch(`http://localhost:8088/Messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
            .then(getReply)
    }

    const deleteReply = (param) => {
        return fetch(`http://localhost:8088/Messages/${param}`, {
            method: "DELETE"
        })
    }

    const getReply = () => {
        return fetch(`http://localhost:8088/Messages?lenderId=${localStorage.getItem("ToolMeOnce_Member")}`)
            .then(res => res.json())
            .then(setReply)
    }

    return (
        <ReplyContext.Provider value={{
            addReply, deleteReply, getReply, reply
        }}>
            {props.children}
        </ReplyContext.Provider>
    )
}