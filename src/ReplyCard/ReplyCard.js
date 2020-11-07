import React, { useContext } from "react"
import { ReplyContext } from "./ReplyDataProvider"
import { useHistory } from "react-router-dom"
import "./Reply.css"

export const ReplyCard = ({ reply }) => {
    const { addReply, deleteReply } = useContext(ReplyContext)
    const history = useHistory();

    return (
        < div className="BorrowerMessagesCardContainer" >
            <div className="BorrowerMessagesCardInfoContainer">
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
                                deleteReply(reply.id)
                                    .then(() => {
                                        history.push("/lend")
                                    })
                            }
                        }
                        type="button">Delete Message
                    </button>
                </div>
                <div className="ReplyBorrowerMessage">Message:  {reply.message}</div>
                <div className="ReplyBorrowerId">Borrower Email:  {reply.userid}</div>
            </div>
        </div >
    )
}