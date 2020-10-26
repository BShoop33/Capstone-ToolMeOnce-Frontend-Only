import React from "react"
import { ToolCardButtonsContainer } from "./LendDetail"
import "./Lend.css"

export const ToolCard = ({ tool }) => (

    <div className="LendToolsIAmLendingCard">
        <img className="LendToolMeOncePicture" src="/Images/Cat.jpg" alt="Logo" />
        <div className="LendToolInfoContainer">
            <ToolCardButtonsContainer key={tool.id} tool={tool} />
            <div className="LendToolName">Tool Name:  {tool.toolname}</div>
            <div className="LendToolDescription">Tool Description:  {tool.tooldescription}</div>
            <div className="LendToolSpecs">Tool Specifications:  {tool.toolspecs}</div>
            <div className="LendToolAccessories">Tool Accessories:  {tool.toolaccessories}</div>
        </div>
    </div>
)