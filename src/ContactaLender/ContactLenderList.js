import React, { useContext, useEffect, useState } from "react"
import { ContactContext } from "./ContactLenderDataProvider"
import "./ContactLender.css"
import { useHistory, useParams } from "react-router-dom"
import "./ContactLender.css"

export const ContactLenderPage = () => {
    const { getContact, getContactById, addContact } = useContext(ContactContext)
    const [contact, setContact] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const { contactId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const addedMessage = { ...contact }

        addedMessage[event.target.name] = event.target.value
        setContact(addedMessage)
    }

    useEffect(() => {
        getContact()
    }, [])

    const constructMessageObject = () => {
        setIsLoading(true)
        addContact({
            id: contact.id,
            userid: localStorage.getItem("ToolMeOnce_Member"),
            replytoid: contact.ContactLenderEmailInput,
            message: contact.ContactLenderMessageInput
        })
            .then(() => history.push("/lend/borrow"))
    }

    return (
        <>
            <body className="ContactLenderBodyContainer">
                <div className="ContactLenderContainer">
                    <h2 className="ContactLenderContainerTitle">Contact a Lender</h2>
                    <div className="ContactLenderInputsContainer">
                        <div className="ContactLenderEmailInputBorder">
                            <input type="text" id="ContactLenderEmailInput" onChange={handleControlledInputChange} name="ContactLenderEmailInput" required autoFocus className="ContactLenderEmailInput"
                                placeholder="Enter the lender's email address here"
                            />
                        </div>
                        <div className="ContactLenderMessageInputBorder">
                            <input type="text" id="ContactLenderMessageInput" onChange={handleControlledInputChange} name="ContactLenderMessageInput" required autoFocus className="ContactLenderMessageInput"
                                placeholder="Enter your message here"
                            />
                        </div>
                        <div className="ContactLenderButtonsContainer">
                            <button className="ContactLenderSaveChangesButton"
                                onClick={event => {
                                    event.preventDefault()
                                    constructMessageObject()
                                    history.push(`/lend/borrow`)
                                }}
                                type="button">Save Changes</button>
                            <button className="ContactLenderCancelButton"
                                onClick={() => { history.push(`/lend/borrow`) }}
                                type="button">Cancel</button>
                        </div>
                    </div>
                </div>
            </body>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}