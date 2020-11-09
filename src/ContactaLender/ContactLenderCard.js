import React from "react"
import { BorrowerMessagesCardButtonsContainer } from "./ContactLenderCardDetail"
import "./ContactLender.css"

export const BorrowerMessagesCard = ({ message }) => (
    < div className="BorrowerMessagesCardContainer" >
        <div className="BorrowerMessagesCardInfoContainer">
            <BorrowerMessagesCardButtonsContainer message={message} />
            <div className="ContactLenderMessage"><span className="ContactLenderMessageStyling">Message:</span>&nbsp;  {message.message}</div>
            <div className="ContactLenderId"><span className="ContactLenderBorrowerEmailStyling">Lender Email:&nbsp;  {message.replytoid}</span></div>
        </div>
    </div >
)