import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState([])

    const editProfile = profile => {
        return fetch(`http://localhost:8088/UsersTable/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
            .then(getProfile)
    }

    const getProfile = () => {
        return fetch(`http://localhost:8088/UsersTable?id=${localStorage.getItem("ToolMeOnce_Member")}`)
            .then(res => res.json())
            .then(setProfile)
    }

    const getProfileById = (id) => {
        return fetch(`http://localhost:8088/UsersTable/${id}`)
            .then(res => res.json())
    }

    return (
        <ProfileContext.Provider value={{
            editProfile, getProfile, getProfileById, profile,
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}