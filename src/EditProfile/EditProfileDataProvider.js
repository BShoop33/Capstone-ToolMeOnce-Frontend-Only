import React, { useState, createContext } from "react"

export const ProfileContext = createContext()




export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState([])

    const getProfile = () => {
        return fetch("http://localhost:8088/Users")
            .then(res => res.json())
            .then(setProfile)
    }

    const editProfile = profile => {
        return fetch(`http://localhost:8088/Users/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
            .then(getProfile)
    }

    const getProfileById = () => {
        return fetch(`http://localhost:8088/Toolstable/`)
            .then(res => res.json())
    }

    return (
        <ProfileContext.Provider value={{
            profile, setProfile, getProfile, getProfileById, editProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}