import React, { useContext, useEffect, useState } from "react"
import { ProfileContext } from "./EditProfileDataProvider.js"
import { EditProfileCard } from "./EditProfileCard.js"
import { useParams, useHistory } from "react-router-dom"
import "./EditProfile.css"

export const ProfilePage = () => {
    const [owned, setOwned] = useState(false)
    const user = parseInt(localStorage.getItem("ToolMeOnce_Member"))
    const { profile, getProfile, getProfileById } = useContext(ProfileContext)
    const [NewProfile, setNewProfile] = useState([])
    const { profileId } = useParams()

    // useEffect(() => {
    //     setNewProfile(NewProfile.find(userProfile => {
    //         userProfile.Users.email = localStorage.getItem("ToolMeOnce_Member")
    //     }))
    // }, [])



    useEffect(() => {
        getProfileById(profileId)
            .then((response) => {
                setNewProfile(response)
            })
    }, [])


    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        setNewProfile(profile)
    }, [profile])






    return (
        <>


            <main className="main">
                <body className="ProfileLoginBodyContainer">
                    <div className="currentProfileEmail">Current Email Address:  {profile.email}</div>
                    <div className="currentProfileEmail">Current Home Address:  {profile.address}</div>
                    {
                        NewProfile.map(users => {
                            return <EditProfileCard key={users.id} tool={users} />
                        })
                    }
                </body>
            </main>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}