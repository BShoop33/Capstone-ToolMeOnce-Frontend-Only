import React, { useContext, useEffect } from "react"
import { LendMessagesContext } from "./LendMessagesDataProvider"
import { useHistory } from "react-router-dom"

export const LendMessagesList = () => {
    const { getLendMessages } = useContext(LendMessagesContext)
    const history = useHistory()

    useEffect(() => {
        getLendMessages()
    }, [])

    return (
        <>
            <div className="Reply">
                <h2 className="ReplyTitle">Reply</h2>
                <div className="ReplyToolAccessoriesInputBorder">
                    <textarea
                        id="ReplyAddToolAccessoriesInput"
                        name="ReplyAddToolAccessoriesInput" required autoFocus
                        className="ReplyAddToolAccessoriesInput"
                        placeholder="Enter your tool's accessories here"
                    />
                </div>
                <div className="ReplyAddToolButtonsContainer">
                    <button className="ReplySendButton"
                        onClick={() => {
                            history.push("/lend")
                        }}
                        type="button">Send
                    </button>
                    <button className="ReplyCancelButton"
                        onClick={() => {
                            history.push("/lend")
                        }}
                        type="button">Cancel
                    </button>
                </div>
            </div>
        </>
    )
}