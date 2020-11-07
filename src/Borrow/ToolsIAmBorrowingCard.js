import React, { useContext } from "react"
import { BorrowContext } from "./BorrowDataProvider.js"
import { useHistory } from "react-router-dom"
import "./Borrow.css"

export const ToolsIAmBorrowingCard = ({ borrow }) => {
    const { returnBorrowTool, } = useContext(BorrowContext)
    const history = useHistory();

    const borrowed = true;
    const constructToolObject = () => {
        returnBorrowTool({
            id: borrow.id,
            userid: borrow.userid,
            borrowerid: "",
            imageurl: borrow.imageurl,
            toolstatus: borrowed,
            toolpicture: borrow.toolpicture,
            toolname: borrow.toolname,
            tooldescription: borrow.tooldescription,
            toolspecs: borrow.toolspecs,
            toolaccessories: borrow.toolaccessories
        })
            .then(() => history.push("/lend/borrow"))
    }

    return (
        <>
            <div className="BorrowToolsIAmBorrowingCard">
                <img className="ToolCardPicture" src={borrow.toolpicture} alt="Tool Picture" />
                <div className="BorrowToolInfoContainer">
                    <div className="BorrowEditToolButtonContainer">
                        <button className="BorrowDeleteToolButton"
                            onClick={event => {
                                event.preventDefault()
                                constructToolObject()
                                history.push(`/lend/borrow`)
                            }}
                            type="button">Return this Tool
                </button>
                    </div>
                    <div className="BorrowToolName">Tool Name:  {borrow.toolname}</div>
                    <div className="BorrowToolDescription">Tool Description:  {borrow.tooldescription}</div>
                    <div className="BorrowToolSpecs">Tool Specifications:  {borrow.toolspecs}</div>
                    <div className="BorrowToolAccessories">Tool Accessories:  {borrow.toolaccessories}</div>
                    <div className="BorrowToolAccessories">Lender Email:  {borrow.userid}</div>
                </div>
            </div>
        </>
    )
}