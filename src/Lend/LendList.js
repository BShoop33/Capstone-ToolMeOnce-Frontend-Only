import React, { useContext, useEffect, useState } from "react"
import { LendContext } from "./LendDataProvider"
import { ToolCard } from "./LendCard"
import "./Lend.css"
import { useHistory } from "react-router-dom"

export const LendList = () => {
    const { tool, getTools, searchTerms } = useContext(LendContext)
    const history = useHistory();
    const [filteredTools, setFiltered] = useState([])

    useEffect(() => {
        getTools()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {

            setFiltered(tool)
        } else {
            setFiltered(tool)
        }
    }, [searchTerms, tool])

    return (
        <>
            <header className="LendPageHeaderContainer">
                <img className="LendToolMeOnceLogo" src="/Images/ToolMeOnceLogo.jpg.png" alt="Logo" />
                <div className="LendToolMeOnceTitleContainer">
                    <h1 className="LendToolMeOnceTitle">Tool - Me - Once</h1>
                </div>
                <div className="LendProfileandBorrowButtonContainer">
                    <button className="LendEditProfile"
                        onClick={() => { history.push(`/lend/profile`) }}
                        type="button">Edit Profile</button>
                    <button className="LendGoToBorrowButton"
                        onClick={() => { history.push(`/lend/borrow`) }}
                        type="button">Go To Borrow</button>
                </div>
            </header>
            <div className="LendSubHeaderContainer">
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
                            filteredTools.map(tool => {
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



