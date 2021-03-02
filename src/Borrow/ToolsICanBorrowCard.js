import React, { useContext } from "react"
import { BorrowContext } from "./BorrowDataProvider.js"
import { useHistory } from "react-router-dom"
import "./Borrow.css"

export const ToolsICanBorrowCard = ({ borrow }) => {
    const { borrowTool, getBorrowToolsICanBorrow, getBorrowToolsIAmBorrowing } = useContext(BorrowContext)
    const history = useHistory();


    const constructToolObject = () => {
        borrowTool({
            id: borrow.id,
            lenderId: borrow.lenderId,
            borrowerid: localStorage.getItem("ToolMeOnce_Member"),
            toolstatus: false,
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
        <div className="BorrowToolsIAmBorrowingCard">
            <img alt="Tool Picture" className="ToolCardPicture" src={borrow.toolpicture} />
            <div className="BorrowToolInfoContainer">
                <div className="BorrowEditToolButtonContainer">
                    <button
                        className="BorrowThisToolButton"
                        onClick={event => {
                            event.preventDefault()
                            constructToolObject()
                            history.push(`/lend/borrow`)
                        }}
                        type="button">Borrow this Tool
                </button>
                </div>
                <div className="BorrowToolName"><span className="ToolsICanBorrowToolName">Tool Name:&nbsp;</span>  {borrow.toolname}</div>
                <div className="BorrowToolDescription"><span className="ToolsICanBorrowToolDescription">Tool Description:&nbsp;</span>  {borrow.tooldescription}</div>
                <div className="BorrowToolSpecs"><span className="ToolsICanBorrowToolSpecs">Tool Specifications:&nbsp;</span>  {borrow.toolspecs}</div>
                <div className="BorrowToolAccessories"><span className="ToolsICanBorrowToolAccessories">Tool Accessories:&nbsp;</span>  {borrow.toolaccessories}</div>
                <button className="BorrowContactALenderButton"
                    onClick={() => {
                        history.push(`/lend/contact/${borrow.lenderId}`)
                    }}
                    type="button">Contact a Lender
                </button>

            </div>
        </div>
    )
}