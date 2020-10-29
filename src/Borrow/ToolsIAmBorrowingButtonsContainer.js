import React, { useContext, useEffect, useState } from "react"
import { BorrowContext } from "./BorrowDataProvider.js"
import { LendContext } from "../Lend/LendDataProvider"
import { useHistory } from "react-router-dom"
import "./Borrow.css"

export const ToolsIAmBorrowingButtonsContainer = ({ borrow }) => {
    const { ReturnBorrowTool, } = useContext(BorrowContext)
    const { getTools } = useContext(LendContext)
    const history = useHistory();

    useEffect(() => {
        getTools()
    }, [])
    const borrowed = true;
    const constructToolObject = () => {

        ReturnBorrowTool({
            id: borrow.id,
            userid: borrow.userid,
            borrowerid: "",
            imageurl: borrow.imageurl,
            toolstatus: borrowed,
            toolname: borrow.toolname,
            tooldescription: borrow.tooldescription,
            toolspecs: borrow.toolspecs,
            toolaccessories: borrow.toolaccessories
        })
            .then(() => history.push("/lend/borrow"))
    }

    return (
        <>
            <div className="BorrowEditToolButtonContainer">
                <button className="BorrowDeleteToolButton"
                    onClick={event => {
                        event.preventDefault()
                        constructToolObject()
                        history.push(`/lend/borrow`)
                        window.location.reload()
                    }}
                    type="button">Return this Tool
                </button>
            </div>
        </>
    )
}