import React, { useContext, useEffect, useState } from "react"
import { LendContext } from "./LendDataProvider"
import { ToolCard } from "./LendCard"
import "./Lend.css"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "../EditProfile/EditProfileDataProvider"

export const LendList = () => {
    const { tool, getTools } = useContext(LendContext)
    const { profile, getProfile } = useContext(ProfileContext)
    const history = useHistory();

    useEffect(() => {
        getTools()
    }, [])

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <>
            <header className="LendPageHeaderContainer">
                <img className="LendToolMeOnceLogo" src="/Images/ToolMeOnceLogo.jpg.png" alt="Logo" />
                <div className="LendToolMeOnceTitleContainer">
                    <h1 className="LendToolMeOnceTitle">Tool - Me - Once</h1>
                </div>
                <div className="LendProfileandBorrowButtonContainer">
                    <button className="LendLogOutButton"
                        onClick={() => {
                            localStorage.clear()
                            history.push(`/lend`)
                        }}
                        type="button">Log Out</button>
                    <button className="LendEditProfile"
                        onClick={() => { history.push(`/lend/profile/${profile}`) }}
                        type="button">Edit Profile</button>
                </div>
            </header>
            <div className="LendSubHeaderContainer">
                <button className="LendGoToBorrowButton"
                    onClick={() => { history.push(`/lend/borrow`) }}
                    type="button">Go To Borrow</button>
                <h2 className="LendPageTitle">Lend</h2>
            </div>
            <body className="LendBodyContainer">
                <div className="LendToolsICanLendContainer">
                    <div className="LendToolsICanLendHeader">
                        <h2 className="LendToolsIAmLendingTitle">Tools I Can Lend</h2>
                        <button className="LendAddNewToolButton"
                            onClick={() => { history.push(`/lend/toolchangepage/addnewtool`) }}
                            type="button">Add a New Tool</button>
                    </div>
                    <div className="LendReturnedToolsCards">
                        {
                            tool.map(tool => {
                                return <ToolCard key={tool.id} tool={tool} />
                            })
                        }

                    </div>
                </div>
                <div className="LendMessagesContainer">
                    <h2 className="LendMessagesTitle">Messages</h2>
                </div>
            </body>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}