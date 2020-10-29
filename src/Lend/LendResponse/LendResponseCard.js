import React from "react"
import { ResponseCardButtonsContainer } from "./LendResponseDetail"
import "./LendResponse.css"

export const LenderResponseCard = ({ response }) => (
    <div className="LendResponseCard">
        <div className="LendResponseCardContainer">
            <div className="responseHeader">
                <h2 className="messageResponse">My Response</h2>
                <ResponseCardButtonsContainer response={response} />
            </div>
            <div className="LendResponseMessage">Tool Name:  {response.message}</div>
        </div>
    </div>
)