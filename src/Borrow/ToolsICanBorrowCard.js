import React from "react"
import { ToolsICanBorrowButtonsContainer } from "./ToolsICanBorrowButtonsContainer"
import "./Borrow.css"

export const ToolsICanBorrowCard = ({ borrow }) => (

    <div className="BorrowToolsIAmBorrowingCard">
        <img className="BorrowToolMeOncePicture" src="/Images/Cat.jpg" alt="Logo" />
        <div className="BorrowToolInfoContainer">
            <ToolsICanBorrowButtonsContainer borrow={borrow} />
            <div className="BorrowToolName">Tool Name:  {borrow.toolname}</div>
            <div className="BorrowToolDescription">Tool Description:  {borrow.tooldescription}</div>
            <div className="BorrowToolSpecs">Tool Specifications:  {borrow.toolspecs}</div>
            <div className="BorrowToolAccessories">Tool Accessories:  {borrow.toolaccessories}</div>
            <div className="BorrowToolAccessories">Lender Email:  {borrow.userid}</div>
        </div>
    </div>
)