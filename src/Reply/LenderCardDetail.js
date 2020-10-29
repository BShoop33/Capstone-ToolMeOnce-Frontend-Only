import React, { useContext } from "react"
import { ReplyContext } from "./LenderReplyDataProvider"
import { useHistory } from "react-router-dom"
import "./Reply.css"

export const LenderMessagesCardButtonsContainer = ({ reply }) => {
    const { addReply, DeleteReply } = useContext(ReplyContext)
    const history = useHistory();

    return (
        <>
            <div className="ContactBorrowerButtonContainer">
                <button className="ContactBorrowerReplyButton"
                    onClick={
                        () => {
                            addReply(reply.id)
                                .then(() => {
                                    history.push("/lend/response")
                                })
                        }
                    }
                    type="button">Reply
                </button>


                <button className="ContactBorrowerDeleteButton"
                    onClick={
                        () => {
                            DeleteReply(reply.id)
                                .then(() => {
                                    history.push("/lend")
                                })
                        }
                    }
                    type="button">Delete Message
                </button>
            </div>
        </>
    )
}