import React, { useContext } from "react"
import { ReplyContext } from "./ReplyDataProvider"
import { useHistory } from "react-router-dom"
import "./Reply.css"

export const ReplyCard = ({ reply }) => {
    const { addReply, getReply, deleteReply } = useContext(ReplyContext)

    const history = useHistory();

    return (
        < div className="BorrowerMessagesCardContainer" >
            <div className="BorrowerMessagesCardInfoContainer">
                <div className="ContactBorrowerButtonContainer">
                    <button
                        className="ContactBorrowerReplyButton"
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

                    <button
                        className="ContactBorrowerDeleteButton"
                        onClick={
                            () => {
                                deleteReply(reply.id)
                                    .then(getReply)
                                    .then(() => {
                                        history.push("/lend")
                                    })
                            }
                        }
                        type="button">Delete Message
                    </button>
                </div>
                <div className="ReplyBorrowerMessage"><span className="ReplyCardMessageStyling">Message:</span>&nbsp;  {reply.message}</div>
                <div className="ReplyBorrowerId"><span className="ReplyCardEmailStyling">Borrower Email:&nbsp;  {reply.userid}</span></div>
            </div>
        </div >
    )
}