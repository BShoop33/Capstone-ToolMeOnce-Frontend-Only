import React, { useContext, useEffect, useState } from "react"
import { BorrowContext } from "./BorrowDataProvider.js"
import "./Borrow.css"
import { useParams, useHistory } from "react-router-dom"

export const BorrowCardButtonsContainer = () => {
    const { getBorrowById, ReturnBorrowTool } = useContext(BorrowContext)
    const [BorrowDetail, setBorrowDetail] = useState({})
    const history = useHistory();
    const { BorrowId } = useParams();

    useEffect(() => {
        getBorrowById(BorrowId)
            .then((response) => {
                setBorrowDetail(response)
            })
    }, [])


    return (

        <div className="BorrowEditToolButtonContainer">
            <button className="BorrowDeleteToolButton"
                onClick={
                    () => {
                        ReturnBorrowTool(BorrowDetail.id)
                            .then(() => {
                                history.push("/borrow")
                            })
                    }

                } type="button">Return this Tool</button>

        </div>
    )
}