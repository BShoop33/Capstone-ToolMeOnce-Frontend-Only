import React, { useContext, useEffect, useState } from "react"
import { BorrowContext } from "./BorrowDataProvider.js"
import { LendContext } from "../Lend/LendDataProvider"
import { useHistory } from "react-router-dom"
import "./Borrow.css"

export const ToolsICanBorrowCard = ({ borrow }) => {
    const { borrowTool } = useContext(BorrowContext)
    const { getTools } = useContext(LendContext)
    const history = useHistory();
    const [Tool, setTool] = useState({})



    useEffect(() => {
        getTools()
            .then(Tool => {
                setTool(Tool)
            })
    }, [])

    const handleSubmitInputChange = (e) => {
        const newSubmit = { ...Tool }
        newSubmit[e.target.name] = e.target.value
        setTool(newSubmit)
    }



    const constructToolObject = () => {
        const borrowed = false;
        borrowTool(
            ({
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
        )
            .then(() => history.push("/lend/borrow"))
    }

    return (
        <div className="BorrowToolsIAmBorrowingCard">
            <img className="ToolCardPicture" src={borrow.toolpicture} alt="Tool Picture" />
            <div className="BorrowToolInfoContainer">
                <div className="BorrowEditToolButtonContainer">
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