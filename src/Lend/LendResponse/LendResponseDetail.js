import React, { useContext } from "react"
import { LendResponseContext } from "./LendResponseDataProvider"
import { useHistory } from "react-router-dom"
import "./LendResponse.css"

export const ResponseCardButtonsContainer = ({ response }) => {
    const { DeleteResponse } = useContext(LendResponseContext)
    const history = useHistory();

    return (
        <>
            <div className="LendResponseToolButtonContainer">
                <button className="LendDeleteToolButton"
                    onClick={
                        () => {
                            DeleteResponse(response.id)
                                .then(() => {
                                    history.push("/lend")
                                })
                        }
                    }
                    type="button">Delete Response
                    </button>
            </div>
        </>
    )
}