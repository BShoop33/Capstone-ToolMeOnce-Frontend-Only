import React, { useContext, useState } from "react"
import { LendResponseContext } from "./LendResponseDataProvider"
import { useHistory } from "react-router-dom"
import "./LendResponse.css"

export const LendResponsePage = () => {
    const { addResponse } = useContext(LendResponseContext)

    const [response, setResponse] = useState({})

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const addedMessage = { ...response }
        addedMessage[event.target.name] = event.target.value
        setResponse(addedMessage)
    }

    const constructMessageObject = () => {
        addResponse({
            id: response.id,
            userid: response.LendResponseEmailInput,
            message: response.LendResponseMessageInput,
            replytoid: localStorage.getItem("ToolMeOnce_Member")
        })
            .then(() =>
                history.push("/lend"))
    }

    return (
        <>
            <div className="LendResponseBodyContainer">
                <div className="LendResponseContainer">
                    <h2 className="LendResponseContainerTitle">Respond to Borrower</h2>
                    <div className="LendResponseInputsContainer">
                        <div className="LendResponseEmailInputBorder">
                            <input type="text"
                                autoFocus
                                className="LendResponseEmailInput"
                                id="LendResponseEmailInput"
                                name="LendResponseEmailInput"
                                onChange={handleControlledInputChange}
                                placeholder="Enter the lender's email address here"
                                required
                            />
                        </div>
                        <div className="LendResponseMessageInputBorder">
                            <input type="text"
                                autoFocus
                                className="LendResponseMessageInput"
                                id="LendResponseMessageInput"
                                name="LendResponseMessageInput"
                                onChange={handleControlledInputChange}
                                placeholder="Enter your message here"
                                required
                            />
                        </div>
                        <div className="LendResponseButtonsContainer">
                            <button
                                className="LendResponseSaveChangesButton"
                                onClick={event => {
                                    event.preventDefault()
                                    constructMessageObject()
                                    history.push(`/lend/borrow`)
                                }}
                                type="button">Send Message
                            </button>
                            <button
                                className="LendResponseCancelButton"
                                onClick={() => {
                                    history.push(`/lend`)
                                }}
                                type="button">Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}