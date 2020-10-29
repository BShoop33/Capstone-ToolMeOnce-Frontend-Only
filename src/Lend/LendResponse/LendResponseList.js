import React, { useContext, useEffect, useState } from "react"
import { LendResponseContext } from "./LendResponseDataProvider"
import { useHistory, useParams } from "react-router-dom"
import "./LendResponse.css"

export const LendResponsePage = () => {
    const { addResponse, getResponse } = useContext(LendResponseContext)
    const [response, setResponse] = useState({})
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const addedMessage = { ...response }
        addedMessage[event.target.name] = event.target.value
        setResponse(addedMessage)
    }

    useEffect(() => {
        getResponse()
    }, [])

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
            <body className="LendResponseBodyContainer">
                <div className="LendResponseContainer">
                    <h2 className="LendResponseContainerTitle">Respond to Borrower</h2>
                    <div className="LendResponseInputsContainer">
                        <div className="LendResponseEmailInputBorder">
                            <input type="text"
                                id="LendResponseEmailInput"
                                onChange={handleControlledInputChange}
                                name="LendResponseEmailInput" required autoFocus
                                className="LendResponseEmailInput"
                                placeholder="Enter the lender's email address here"
                            />
                        </div>
                        <div className="LendResponseMessageInputBorder">
                            <input type="text"
                                id="LendResponseMessageInput"
                                onChange={handleControlledInputChange}
                                name="LendResponseMessageInput" required autoFocus
                                className="LendResponseMessageInput"
                                placeholder="Enter your message here"
                            />
                        </div>
                        <div className="LendResponseButtonsContainer">
                            <button className="LendResponseSaveChangesButton"
                                onClick={event => {
                                    event.preventDefault()
                                    constructMessageObject()
                                    history.push(`/lend/borrow`)
                                }}
                                type="button">Send Message
                            </button>
                            <button className="LendResponseCancelButton"
                                onClick={() => {
                                    history.push(`/lend`)
                                }}
                                type="button">Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </body>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}