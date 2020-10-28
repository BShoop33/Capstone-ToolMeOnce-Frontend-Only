import React, { useState, createContext } from "react"
export const LendMessagesContext = createContext()

export const LendMessagesProvider = (props) => {
    const [lendMessage, setLendMessage] = useState([])

    const addLendMessages = (messages) => {
        return fetch("http://localhost:8088/Messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messages)
        })
            .then(getLendMessages)
    }

    const DeleteLendMessages = (messagesId) => {
        return fetch(`http://localhost:8088/Messages/${messagesId}`, {
            method: "DELETE"
        })
            .then(getLendMessages)
    }

    const getLendMessages = () => {
        return fetch("http://localhost:8088/Messages")
            .then(res => res.json())
            .then(setLendMessage)
    }

    const getLendMessagesById = (id) => {
        return fetch(`http://localhost:8088/Messages/${id}`)
            .then(res => res.json())
    }

    return (
        <LendMessagesContext.Provider value={{
            lendMessage, addLendMessages, DeleteLendMessages, getLendMessages, getLendMessagesById, setLendMessage
        }}>
            {props.children}
        </LendMessagesContext.Provider>
    )
}