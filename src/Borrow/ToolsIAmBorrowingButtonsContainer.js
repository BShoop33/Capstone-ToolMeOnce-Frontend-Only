import React, { useContext, useEffect, useState } from "react"
import { BorrowContext } from "./BorrowDataProvider.js"
import "./Borrow.css"
import { useHistory } from "react-router-dom"

export const ToolsIAmBorrowingButtonsContainer = ({ borrow }) => {
    const { ReturnBorrowTool } = useContext(BorrowContext)
    const history = useHistory();

    return (
        <>
            <div className="BorrowEditToolButtonContainer">
                <button className="BorrowDeleteToolButton"
                    onClick={
                        () => {
                            ReturnBorrowTool(borrow.id)
                                .then(() => {
                                    history.push("/borrow")
                                })
                        }
                    } type="button">Return this Tool</button>
            </div>
        </>
    )
}