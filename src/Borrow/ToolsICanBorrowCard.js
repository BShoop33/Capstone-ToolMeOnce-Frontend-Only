import React, { useContext } from "react"
import { BorrowContext } from "./BorrowDataProvider.js"
import { useHistory } from "react-router-dom"
import "./Borrow.css"

export const ToolsICanBorrowCard = ({ borrow }) => {
    const { borrowTool, getBorrowToolsICanBorrow, getBorrowToolsIAmBorrowing } = useContext(BorrowContext)
    const history = useHistory();

    //When invoked, runs the enclosed borrowTool, getBorrowToolsICanBorrow, and getBorrowToolsIAmBorrowing functions
    const constructToolObject = () => {
        const borrowed = false;
        /* Invokes the borrowTool function in BorrowDataProvider.js and constructs a tool object (using the data array received from the mapping of the 
        toolsICanBorrow function in BorrowList.js and embedded as the {borrow} parameter of this module's toolsICanBorrow function) for that function's 
        PUT operation to store*/
        borrowTool({
            id: borrow.id,
            userid: borrow.userid,
            borrowerid: localStorage.getItem("ToolMeOnce_Member"),
            imageurl: borrow.imageurl,
            toolstatus: borrowed,
            toolpicture: borrow.toolpicture,
            toolname: borrow.toolname,
            tooldescription: borrow.tooldescription,
            toolspecs: borrow.toolspecs,
            toolaccessories: borrow.toolaccessories
        })
            //Updates state using the data returned by the getBorrowToolsICanBorrow function in the BorrowDataProvider.js module
            .then(getBorrowToolsICanBorrow)
            //Updates state using the data returned by the getBorrowToolsIAmBorrowing function in the BorrowDataProvider.js module
            .then(getBorrowToolsIAmBorrowing)
    }

    return (
        <div className="BorrowToolsIAmBorrowingCard">
            <img className="ToolCardPicture" src={borrow.toolpicture} alt="Tool Picture" />
            <div className="BorrowToolInfoContainer">
                <div className="BorrowEditToolButtonContainer">
                    {/* When clicked, invokes the constructToolObject function and then renders the Borrow Page on the DOM */}
                    <button className="BorrowThisToolButton"
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
                <div className="BorrowToolAccessories"><span className="ToolsICanBorrowLenderEmail">Lender Email:&nbsp;  {borrow.userid}</span></div>
            </div>
        </div>
    )
}