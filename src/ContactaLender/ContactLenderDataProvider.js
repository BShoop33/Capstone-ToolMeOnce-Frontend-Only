import React, { useState, createContext } from "react"
export const ContactContext = createContext()

export const ContactProvider = (props) => {
    const [contact, setContact] = useState([])

    const addContact = (param) => {
        return fetch(`http://localhost:8088/Messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
            .then(getContact)
    }

    const deleteContact = (param) => {
        return fetch(`http://localhost:8088/Messages/${param}`, {
            method: "DELETE"
        })
    }

    const getContact = () => {
        return fetch(`http://localhost:8088/Messages?userid=${localStorage.getItem("ToolMeOnce_Member")}`)
            .then(res => res.json())
            .then(setContact)
    }

    return (
        <ContactContext.Provider value={{
            contact, addContact, deleteContact, getContact
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}