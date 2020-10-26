import React, { useContext, useEffect, useState } from "react"
import { LendContext } from "./LendDataProvider.js"
import "./Lend.css"
import { useParams, useHistory } from "react-router-dom"

export const ToolCardButtonsContainer = ({ tool }) => {
    const { getToolById, DeleteTool } = useContext(LendContext)

    const history = useHistory();





    return (
        <>

            <div className="LendEditToolButtonContainer">
                <button className="LendEditToolButton"
                    onClick={() => { history.push(`/lend/toolchangepage/${tool.id}`) }}
                    type="button">Edit this Tool</button>
                <button className="LendDeleteToolButton"
                    onClick={
                        () => {
                            DeleteTool(tool.id)
                                .then(() => {
                                    history.push("/lend")
                                })
                        }

                    } type="button">Delete this Tool</button>

            </div>
        </>
    )
}