import React, { useContext } from "react"
import { ContactContext } from "./ContactLenderDataProvider"
import { useHistory } from "react-router-dom"
import "./ContactLender.css"

export const BorrowerMessagesCardButtonsContainer = ({ message }) => {
    const { deleteContact } = useContext(ContactContext)
    const history = useHistory();

    return (
        <>
            <div className="ContactLenderButtonContainer">
                <button className="ContactLenderDeleteButton"
                    onClick={
                        () => {
                            deleteContact(message.id)
                                .then(() => {
                                    history.push("/lend/borrow")
                                })
                        }
                    }
                    type="button">Delete Message
                </button>
            </div>
        </>
    )
}