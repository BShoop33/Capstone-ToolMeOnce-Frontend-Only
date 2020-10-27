import React, { useState, createContext } from "react"
export const ContactContext = createContext()

export const ContactProvider = (props) => {
    const [contact, setContact] = useState([])

    const getContact = () => {
        return fetch("http://localhost:8088/Messages")
            .then(res => res.json())
            .then(setContact)
    }

    const addContact = (param) => {
        return fetch("http://localhost:8088/Messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
            .then(getContact)
    }

    const getContactById = (param) => {
        return fetch(`http://localhost:8088/Messages/${param}?expand=user`)
            .then(res => res.json())
    }

    const DeleteContact = (param) => {
        return fetch(`http://localhost:8088/Messages/${param}`, {
            method: "DELETE"
        })
    }

    const editContact = param => {
        return fetch(`http://localhost:8088/Messages/${param.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
            .then(getContact)
    }

    return (
        <ContactContext.Provider value={{
            contact, addContact, getContact, getContactById, DeleteContact, editContact
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}