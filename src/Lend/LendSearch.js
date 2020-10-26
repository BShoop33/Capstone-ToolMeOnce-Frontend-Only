import React, { useContext } from "react"
import { LendContext } from "./LendDataProvider.js"
import "./Lend.css"

export const LendSearch = () => {
    const { setSearchTerms } = useContext(LendContext)

    return (
        <>
            Search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Enter your search terms ... " />
        </>
    )
}