import React, { useState, createContext } from "react"
export const BorrowContext = createContext()

export const BorrowProvider = (props) => {

    const [borrow, setBorrow] = useState([])
    const [toolsIAmBorrowing, setToolsIAmBorrowing] = useState([])
    const [toolsICanBorrow, setToolsICanBorrow] = useState([])

    const addBorrow = (param) => {
        return fetch(`http://localhost:8088/Toolstable`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
            .then(getBorrow)
    }

    const borrowTool = param => {
        return fetch(`http://localhost:8088/Toolstable/${param.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
            .then(getBorrow)
    }

    const getBorrow = () => {
        return fetch(`http://localhost:8088/Toolstable?toolstatus=true`)
            .then(res => res.json())
            .then(setBorrow)
    }

    const getBorrowToolsIAmBorrowing = () => {
        return fetch(`http://localhost:8088/Toolstable?toolstatus=false&lenderId_ne=${localStorage.getItem("ToolMeOnce_Member")}`)
            .then(res => res.json())
            .then(setToolsIAmBorrowing)
    }

    const getBorrowToolsICanBorrow = () => {
        return fetch(`http://localhost:8088/Toolstable?toolstatus=true&lenderId_ne=${localStorage.getItem("ToolMeOnce_Member")}`)
            .then(res => res.json())
            .then(setToolsICanBorrow)
    }

    const returnBorrowTool = param => {
        return fetch(`http://localhost:8088/Toolstable/${param.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
            .then(getBorrow)
    }

    return (
        <BorrowContext.Provider value={{
            addBorrow, borrow, borrowTool, getBorrow, getBorrowToolsIAmBorrowing, getBorrowToolsICanBorrow, toolsIAmBorrowing,
            toolsICanBorrow, returnBorrowTool,
        }}>
            {props.children}
        </BorrowContext.Provider>
    )
}