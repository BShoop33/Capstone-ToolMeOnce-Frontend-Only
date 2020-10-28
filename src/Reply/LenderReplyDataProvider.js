import React, { useState, createContext } from "react"
export const ReplyContext = createContext()

export const ReplyProvider = (props) => {
    const [reply, setReply] = useState([])

    const getReply = () => {
        return fetch(`http://localhost:8088/Messages?replytoid=${localStorage.getItem("ToolMeOnce_Member")}`)
            .then(res => res.json())
            .then(setReply)
    }

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

    const DeleteReply = (param) => {
        return fetch(`http://localhost:8088/Messages/${param}`, {
            method: "DELETE"
        })
    }

    return (
        <ReplyContext.Provider value={{
            reply, addReply, DeleteReply, getReply
        }}>
            {props.children}
        </ReplyContext.Provider>
    )
}