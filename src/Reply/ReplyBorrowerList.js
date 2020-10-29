import React, { useContext, useEffect, useState } from "react"
import { ReplyContext } from "./LenderReplyDataProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Reply.css"

export const BorrowerReplyPage = () => {
    const { addReply, getReply } = useContext(ReplyContext)
    const [chats, setChats] = useState({})
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const addedMessage = { ...chats }
        addedMessage[event.target.name] = event.target.value
        setChats(addedMessage)
    }

    useEffect(() => {
        getReply()
    }, [])

    const constructMessageObject = () => {
        addReply({
            id: chats.id,
            userid: localStorage.getItem("ToolMeOnce_Member"),
            message: chats.ContactLenderMessageInput,
            replytoid: chats.ContactLenderEmailInput
        })
            .then(() =>
                history.push("/lend"))
    }

    return (
        <>
            <body className="ContactLenderBodyContainer">
                <div className="ContactLenderContainer">
                    <h2 className="ContactLenderContainerTitle">Contact a Lender</h2>
                    <div className="ContactLenderInputsContainer">
                        <div className="ContactLenderEmailInputBorder">
                            <input type="text"
                                id="ContactLenderEmailInput"
                                onChange={handleControlledInputChange}
                                name="ContactLenderEmailInput" required autoFocus
                                className="ContactLenderEmailInput"
                                placeholder="Enter the lender's email address here"
                            />
                        </div>
                        <div className="ContactLenderMessageInputBorder">
                            <input type="text"
                                id="ContactLenderMessageInput"
                                onChange={handleControlledInputChange}
                                name="ContactLenderMessageInput" required autoFocus
                                className="ContactLenderMessageInput"
                                placeholder="Enter your message here"
                            />
                        </div>
                        <div className="ContactLenderButtonsContainer">
                            <button className="ContactLenderSaveChangesButton"
                                onClick={event => {
                                    event.preventDefault()
                                    constructMessageObject()
                                    history.push(`/lend/borrow`)
                                }}
                                type="button">Send Message
                            </button>
                            <button className="ContactLenderCancelButton"
                                onClick={() => {
                                    history.push(`/lend`)
                                }}
                                type="button">Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </body>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}