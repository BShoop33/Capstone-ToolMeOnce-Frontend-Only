import React, { useContext, useEffect, useState } from "react"
import { ContactContext } from "./ContactLenderDataProvider"
import "./ContactLender.css"
import { useHistory } from "react-router-dom"

export const BorrowerMessagesCardButtonsContainer = ({ message }) => {
    const { DeleteContact } = useContext(ContactContext)
    const history = useHistory();

    return (
        <>
            <div className="ContactLenderButtonContainer">
                <button className="ContactLenderDeleteButton"
                    onClick={
                        () => {
                            DeleteContact(message.id)
                                .then(() => {
                                    history.push("/lend/borrow")
                                })
                        }
                    }
                    type="button">Delete Message</button>
            </div>
        </>
    )
}