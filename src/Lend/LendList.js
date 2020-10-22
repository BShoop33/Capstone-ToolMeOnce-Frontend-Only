import React, { useContext, useEffect, useState } from "react"
import { LendContext } from "./LendDataProvider"
import { ToolCard } from "./LendCard"
import "./Lend.css"
import { useHistory } from "react-router-dom"

export const LendList = () => {
    const history = useHistory();
    const { Tools, getTools, setTools } = useContext(LendContext)

    const [NewTools, setNewTools] = useState([])


    useEffect(() => {
        getTools()
    }, [])

    useEffect(() => {
        setNewTools(Tools)
    }, [Tools])

    // useEffect(() => {
    //     setTools(NewTools)
    // }, [NewTools])


    // useEffect(() => {
    //     NewToolArray.push(getTools())
    // }, [])



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
                            onClick={() => { history.push(`/lend/addnewtool`) }}
                            type="button">Add a New Tool</button>

                    </div>
                    <div className="LendReturnedToolsCards">
                        {
                            NewTools.map(tool => {
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






// import React, { useContext, useEffect, useState } from "react"
// import { ChatContext } from "./ChatProvider"
// import { ChatCard } from "./ChatCard"
// import { useHistory } from "react-router-dom"

// Empty dependency array - useEffect only runs after first render
//     useEffect(() => {
//         getChat()
//     }, [])

// export const ChatList = () => {
//     const { messages, getChat, searchTerms } = useContext(ChatContext)
//     const [filteredMessages, setFiltered] = useState([])
//     const history = useHistory()

//     
//     // useEffect dependency array with dependencies - will run if dependency changes (state)
//     // searchTerms will cause a change
//     useEffect(() => {
//         if (searchTerms !== "") {
//             const subset = messages.filter(chat => chat.renderedMessage.toLowerCase().includes(searchTerms))
//             setFiltered(subset)
//         } else {
//             setFiltered(messages)
//         }
//     }, [searchTerms, messages])

//     return (
//         <>
//             <h1>Chat</h1>
//             <button onClick={() => { history.push("/chats/create") }}>
//                 Add Message
//             </button>
//             <div className="chats">
//                 {
//                     filteredMessages.map(chat => {
//                         return <ChatCard key={chat.id} chat={chat} />
//                     })
//                 }
//             </div>
//         </>
//     )
// }