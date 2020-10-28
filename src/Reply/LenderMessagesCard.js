import React from "react"
import { LenderMessagesCardButtonsContainer } from "./LenderCardDetail"
import "./Reply.css"

export const LenderMessagesCard = ({ reply }) => (
    < div className="BorrowerMessagesCardContainer" >
        <div className="BorrowerMessagesCardInfoContainer">
            <LenderMessagesCardButtonsContainer reply={reply} />
            <div className="ReplyBorrowerMessage">Message:  {reply.message}</div>
            <div className="ReplyBorrowerId">Borrower Email:  {reply.userid}</div>
        </div>
    </div >
)