import React, { useContext } from "react"
import { BorrowContext } from "./BorrowDataProvider.js"
import { useHistory } from "react-router-dom"
import "./Borrow.css"

export const ToolsIAmBorrowingCard = ({ borrow }) => {
    const { returnBorrowTool, getBorrowToolsICanBorrow, getBorrowToolsIAmBorrowing } = useContext(BorrowContext)
    const history = useHistory();

    const constructToolObject = () => {
        const borrowed = true;
        returnBorrowTool({
            id: borrow.id,
            lenderId: borrow.lenderId,
            borrowerid: "",
            toolstatus: borrowed,
            toolpicture: borrow.toolpicture,
            toolname: borrow.toolname,
            tooldescription: borrow.tooldescription,
            toolspecs: borrow.toolspecs,
            toolaccessories: borrow.toolaccessories
        })
            .then(getBorrowToolsICanBorrow)
            .then(getBorrowToolsIAmBorrowing)
    }

    return (
        <>
            <div className="BorrowToolsIAmBorrowingCard">
                <img alt="Tool Picture" className="ToolCardPicture" src={borrow.toolpicture} />
                <div className="BorrowToolInfoContainer">
                    <div className="BorrowEditToolButtonContainer">
                        <button
                            className="BorrowDeleteToolButton"
                            onClick={event => {
                                event.preventDefault()
                                constructToolObject()
                                history.push(`/lend/borrow`)
                            }}
                            type="button">Return this Tool
                </button>
                    </div>
                    <div className="BorrowToolName"><span className="ToolsIAmBorrowingToolName">Tool Name:&nbsp;</span>  {borrow.toolname}</div>
                    <div className="BorrowToolDescription"><span className="ToolsIAmBorrowingToolDescription">Tool Description:&nbsp;</span>  {borrow.tooldescription}</div>
                    <div className="BorrowToolSpecs"><span className="ToolsIAmBorrowingToolSpecs">Tool Specifications:&nbsp;</span>  {borrow.toolspecs}</div>
                    <div className="BorrowToolAccessories"><span className="ToolsIAmBorrowingToolAccessories">Tool Accessories:&nbsp;</span>  {borrow.toolaccessories}</div>
                    <div className="BorrowToolAccessories"><span className="ToolsIAmBorrowingLenderEmail">Lender Email:&nbsp;  {borrow.userid}</span></div>
                </div>
            </div>
        </>
    )
}