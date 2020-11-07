import React from "react"
import { ToolCardButtonsContainer } from "./LendDetail"
import "./Lend.css"

export const ToolCard = ({ tool }) => (
    <div className="LendToolsIAmLendingCard">
        <img className="ToolCardPicture" src={tool.toolpicture} alt="Tool Picture" />
        <div className="LendToolInfoContainer">
            <ToolCardButtonsContainer tool={tool} />
            <div className="LendToolName">Tool Name:  {tool.toolname}</div>
            <div className="LendToolDescription">Tool Description:  {tool.tooldescription}</div>
            <div className="LendToolSpecs">Tool Specifications:  {tool.toolspecs}</div>
            <div className="LendToolAccessories">Tool Accessories:  {tool.toolaccessories}</div>
            <div className="LendToolBorrower">Borrower Email:  {tool.borrowerid}</div>
        </div>
    </div>
)