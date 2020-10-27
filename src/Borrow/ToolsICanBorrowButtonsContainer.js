import React, { useContext, useEffect, useState } from "react"
import { BorrowContext } from "./BorrowDataProvider.js"
import "./Borrow.css"
import { useHistory } from "react-router-dom"

export const ToolsICanBorrowButtonsContainer = ({ borrow }) => {
    const { ReturnBorrowTool } = useContext(BorrowContext)
    const history = useHistory();

    return (
        <>
            <div className="BorrowEditToolButtonContainer">
                <button className="BorrowThisToolButton"
                    onClick={
                        () => {
                            ReturnBorrowTool(borrow.id)
                                .then(() => {
                                    history.push("/borrow")
                                })
                        }
                    } type="button">Borrow this Tool</button>
            </div>
        </>
    )
}