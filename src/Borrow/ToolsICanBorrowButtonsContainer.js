import React, { useContext, useEffect, useState } from "react"
import { BorrowContext } from "./BorrowDataProvider.js"
import { LendContext } from "../Lend/LendDataProvider"
import "./Borrow.css"
import { useHistory } from "react-router-dom"

export const ToolsICanBorrowButtonsContainer = ({ borrow }) => {

    const { BorrowTool } = useContext(BorrowContext)
    const { getTools } = useContext(LendContext)
    const history = useHistory();

    useEffect(() => {
        getTools()
    }, [])
    const borrowed = false;
    const constructToolObject = () => {

        BorrowTool({
            id: borrow.id,
            userid: borrow.userid,
            borrowerid: borrow.borrowerid,
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
                <button className="BorrowThisToolButton"
                    onClick={event => {
                        event.preventDefault()
                        constructToolObject()
                        history.push(`/lend/borrow`)
                        window.location.reload()
                    }}
                    type="button">Borrow this Tool
                </button>
            </div>
        </>
    )
}
