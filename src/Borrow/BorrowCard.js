import React from "react"
import { ToolCardButtonsContainer } from "./LendDetail"
import "./Lend.css"

export const BorrowCard = ({ borrow }) => (

    <div className="BorrowToolsIAmLendingCard">
        <img className="BorrowToolMeOncePicture" src="/Images/Cat.jpg" alt="Logo" />
        <div className="BorrowToolInfoContainer">
            <BorrowCardButtonsContainer key={borrow.id} tool={borrow} />
            <div className="BorrowToolName">Tool Name:  {borrow.toolname}</div>
            <div className="BorrowToolDescription">Tool Description:  {borrow.tooldescription}</div>
            <div className="BorrowToolSpecs">Tool Specifications:  {borrow.toolspecs}</div>
            <div className="BorrowToolAccessories">Tool Accessories:  {borrow.toolaccessories}</div>
        </div>
    </div>
)