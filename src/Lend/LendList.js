import React, { useContext, useEffect } from "react"
import { LendContext } from "./LendDataProvider"
import { ReplyCard } from "../ReplyCard/ReplyCard"
import { ToolCard } from "./LendCard"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "../EditProfile/EditProfileDataProvider"
import "./Lend.css"
import { ReplyContext } from "../ReplyCard/ReplyDataProvider"
import { EditProfileButton } from "../EditProfile/EditProfileButton"

export const LendList = () => {
    const { tool, getTools } = useContext(LendContext)
    const { profile, getProfile } = useContext(ProfileContext)
    const { reply, getReply } = useContext(ReplyContext)
    const history = useHistory();

    useEffect(() => {
        getTools()
    }, [])

    useEffect(() => {
        getProfile()
    }, [])


    useEffect(() => {
        setInterval(() => {
            getReply()
        }, 125)
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
                        type="button">Log Out
                    </button>
                    {
                        profile.map(profile => {
                            return <EditProfileButton key={profile.id} profile={profile} />
                        })
                    }
                </div>
            </header>
            <div className="LendSubHeaderContainer">
                <button className="LendGoToBorrowButton"
                    onClick={() => {
                        history.push(`/lend/borrow`)
                    }}
                    type="button">Go To Borrow
                </button>
                <h2 className="LendPageTitle">Lend</h2>
            </div>
            <div className="LendBodyContainer">
                <div className="LendToolsICanLendContainer">
                    <div className="LendToolsICanLendHeader">
                        <h2 className="LendToolsIAmLendingTitle">Tools I Can Lend</h2>
                        <button className="LendAddNewToolButton"
                            onClick={() => {
                                history.push(`/lend/toolchangepage/addnewtool`)
                            }}
                            type="button">Add a New Tool
                        </button>
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
                    {
                        reply.map(reply => {
                            return < ReplyCard key={reply.id} reply={reply} />
                        })
                    }



                </div>
            </div>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}