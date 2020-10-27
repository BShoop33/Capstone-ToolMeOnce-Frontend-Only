import React from "react"
import { ToolsIAmBorrowingButtonsContainer } from "./ToolsIAmBorrowingButtonsContainer"
import "./Borrow.css"

export const ToolsIAmBorrowingCard = ({ borrow }) => (
    <>
        <div className="BorrowToolsIAmBorrowingCard">
            <img className="BorrowToolMeOncePicture" src="/Images/Cat.jpg" alt="Logo" />
            <div className="BorrowToolInfoContainer">
                <ToolsIAmBorrowingButtonsContainer borrow={borrow} />
                <div className="BorrowToolName">Tool Name:  {borrow.toolname}</div>
                <div className="BorrowToolDescription">Tool Description:  {borrow.tooldescription}</div>
                <div className="BorrowToolSpecs">Tool Specifications:  {borrow.toolspecs}</div>
                <div className="BorrowToolAccessories">Tool Accessories:  {borrow.toolaccessories}</div>
                <div className="BorrowToolAccessories">Lender Email:  {borrow.userid}</div>
            </div>
        </div>
    </>
)