import React from "react"
import "./ContactLender.css"
import { useHistory } from "react-router-dom"

export const ContactLenderPage = () => {
    const history = useHistory();

    return (
        <>
            <body className="ContactLenderBodyContainer">
                <div className="ContactLenderContainer">
                    <h2 className="ContactLenderContainerTitle">Contact a Lender</h2>
                    <div className="ContactLenderInputsContainer">
                        <div className="ContactLenderEmailInputBorder">
                            <input type="text" id="ContactLenderEmailInput" name="ContactLenderEmailInput" required autoFocus className="ContactLenderEmailInput"
                                placeholder="Enter the lender's email address here"
                            />
                        </div>
                        <div className="ContactLenderMessageInputBorder">
                            <input type="text" id="ContactLenderMessageInput" name="ContactLenderMessageInput" required autoFocus className="ContactLenderMessageInput"
                                placeholder="Enter your message here"
                            />
                        </div>
                        <div className="ContactLenderButtonsContainer">
                            <button className="ContactLenderSaveChangesButton" type="button">Save Changes</button>
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