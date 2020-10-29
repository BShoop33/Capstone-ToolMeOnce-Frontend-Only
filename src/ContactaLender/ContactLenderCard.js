import React from "react"
import { BorrowerMessagesCardButtonsContainer } from "./ContactLenderCardDetail"
import "./ContactLender.css"

export const BorrowerMessagesCard = ({ message }) => (
    < div className="BorrowerMessagesCardContainer" >
        <div className="BorrowerMessagesCardInfoContainer">
            <BorrowerMessagesCardButtonsContainer message={message} />
            <div className="ContactLenderMessage">Message:  {message.message}</div>
            <div className="ContactLenderId">Lender Email:  {message.replytoid}</div>
        </div>
    </div >
)