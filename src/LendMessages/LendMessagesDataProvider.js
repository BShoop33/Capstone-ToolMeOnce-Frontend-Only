import React, { useState, createContext } from "react"
export const LendMessagesContext = createContext()

export const LendMessagesProvider = (props) => {
    const [lendMessage, setLendMessage] = useState([])

    const getLendMessages = () => {
        return fetch("http://localhost:8088/Messages")
            .then(res => res.json())
            .then(setLendMessage)
    }

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

    const getLendMessagesById = (id) => {
        return fetch(`http://localhost:8088/Messages/${id}`)
            .then(res => res.json())
    }

    const DeleteLendMessages = (messagesId) => {
        return fetch(`http://localhost:8088/Messages/${messagesId}`, {
            method: "DELETE"
        })
            .then(getLendMessages)
    }

    return (
        <LendMessagesContext.Provider value={{
            lendMessage, setLendMessage, addLendMessages, getLendMessages, getLendMessagesById, DeleteLendMessages
        }}>
            {props.children}
        </LendMessagesContext.Provider>
    )
}