import React from "react"
import { ToolCardButtonsContainer } from "./LendDetail"
import ReactImageMagnify from 'react-image-magnify';
import "./Lend.css"

export const ToolCard = ({ tool }) => (
    <div className="LendToolsIAmLendingCard">
        <ReactImageMagnify {...{
            smallImage: {
                alt: 'Tool Picture',
                height: 325,
                isFluidWidth: false,
                src: tool.toolpicture ? tool.toolpicture : "/Images/ToolMeOnceLogo.jpg.png",
                width: 400,
            },
            largeImage: {
                src: tool.toolpicture ? tool.toolpicture : "/Images/ToolMeOnceLogo.jpg.png",
                height: 1800,
                width: 1800
            }
        }} />

        <div className="LendToolInfoContainer">
            <ToolCardButtonsContainer tool={tool} />
            <div className="LendToolName"><span className="ToolCardToolName">Tool Name:</span>&nbsp;  {tool.toolname}</div>
            <div className="LendToolDescription"><span className="ToolCardToolDescription">Tool Description:</span>&nbsp;  {tool.tooldescription}</div>
            <div className="LendToolSpecs"><span className="ToolCardToolSpecs">Tool Specifications:</span>&nbsp;  {tool.toolspecs}</div>
            <div className="LendToolAccessories"><span className="ToolCardToolAccessories">Tool Accessories:</span>&nbsp;  {tool.toolaccessories}</div>
            <div className="LendToolBorrower"><span className="ToolCardBorrowerEmail">Borrower Email:&nbsp;  {tool.borrowerid}</span></div>
        </div>
    </div>
)