import React, { useContext } from "react"
import { LendContext } from "./LendDataProvider.js"
import { useHistory } from "react-router-dom"
import "./Lend.css"

export const ToolCardButtonsContainer = ({ tool }) => {
    const { deleteTool } = useContext(LendContext)

    const history = useHistory();

    return (
        <>
            <div className="LendEditToolButtonContainer">
                <button
                    className="LendEditToolButton"
                    onClick={() => {
                        history.push(`/lend/toolchangepage/${tool.id}`)
                    }}
                    type="button">Edit this Tool
                </button>
                <button
                    className="LendDeleteToolButton"
                    onClick={
                        () => {
                            deleteTool(tool.id)
                                .then(() => {
                                    history.push("/lend")
                                })
                        }
                    }
                    type="button">Delete this Tool
                    </button>
            </div>
        </>
    )
}