import React from "react"
import "./Reply.css"

export const ReplyPage = () => {

    return (
        <>
            <div className="Reply">
                <h2 className="ReplyTitle">Reply</h2>
                <div className="ReplyToolAccessoriesInputBorder">
                    <textarea id="ReplyAddToolAccessoriesInput" name="ReplyAddToolAccessoriesInput" required autoFocus className="ReplyAddToolAccessoriesInput"
                        placeholder="Enter your tool's accessories here"
                    />
                </div>
                <div className="ReplyAddToolButtonsContainer">
                    <button className="ReplySendButton" type="button">Send</button>
                    <button className="ReplyCancelButton" type="button">Cancel</button>
                </div>
            </div>
        </>
    )
}