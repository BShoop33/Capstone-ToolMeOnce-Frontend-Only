import React, { useContext, useEffect, useState } from "react"
import { LendContext } from "./LendDataProvider.js"
import "./Lend.css"
import { useParams, useHistory } from "react-router-dom"

export const ToolCardButtonsContainer = () => {
    const { getToolById, DeleteTool } = useContext(LendContext)
    const [toolDetail, setToolDetail] = useState({})
    const history = useHistory();
    const { toolId } = useParams();

    useEffect(() => {
        getToolById(toolId)
            .then((response) => {
                setToolDetail(response)
            })
    }, [])

    console.log(toolId)
    return (

        <div className="LendEditToolButtonContainer">
            <button className="LendEditToolButton"
                onClick={() => { history.push(`/lend/toolchangepage/${toolDetail.id}`) }}
                type="button">Edit this Tool</button>
            <button className="LendDeleteToolButton"
                onClick={
                    () => {
                        DeleteTool(toolDetail.id)
                            .then(() => {
                                history.push("/lend")
                            })
                    }

                } type="button">Delete this Tool</button>

        </div>
    )
}