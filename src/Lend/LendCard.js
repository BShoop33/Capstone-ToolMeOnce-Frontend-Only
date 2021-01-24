import React from "react"
import { ToolCardButtonsContainer } from "./LendDetail"
import "./Lend.css"
import ReactImageMagnify from 'react-image-magnify';

export const ToolCard = ({ tool }) => (
    <div className="LendToolsIAmLendingCard">
        {/* <img className="NewToolPicture" src={tool.toolpicture ? tool.toolpicture : "/Images/ToolMeOnceLogo.jpg.png"} /> */}
        <ReactImageMagnify {...{
            smallImage: {
                alt: 'Tool Picture',
                isFluidWidth: false,
                src: tool.toolpicture ? tool.toolpicture : "/Images/ToolMeOnceLogo.jpg.png",
                width: 400,
                height: 325
            },
            largeImage: {
                src: tool.toolpicture ? tool.toolpicture : "/Images/ToolMeOnceLogo.jpg.png",
                width: 1800,
                height: 1800
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