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
            <img className="BorrowToolMeOncePicture" src="/Images/Cat.jpg" alt="Logo" />
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
                <div className="BorrowToolName">Tool Name:  {borrow.toolname}</div>
                <div className="BorrowToolDescription">Tool Description:  {borrow.tooldescription}</div>
                <div className="BorrowToolSpecs">Tool Specifications:  {borrow.toolspecs}</div>
                <div className="BorrowToolAccessories">Tool Accessories:  {borrow.toolaccessories}</div>
                <div className="BorrowToolAccessories">Lender Email:  {borrow.userid}</div>
            </div>
        </div>
    )
}