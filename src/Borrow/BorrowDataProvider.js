import React, { useState, createContext } from "react"
export const BorrowContext = createContext()

export const BorrowProvider = (props) => {
    const [borrow, setBorrow] = useState([])


    const getBorrow = () => {
        return fetch("http://localhost:8088/Toolstable")
            .then(res => res.json())
            .then(setBorrow)
    }

    const addBorrow = (param) => {
        return fetch("http://localhost:8088/Toolstable", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(param)
        })
            .then(getBorrow)
    }

    const getBorrowById = (param) => {
        return fetch(`http://localhost:8088/Toolstable/${param}?expand=user`)
            .then(res => res.json())
    }

    const DeleteBorrow = (param) => {
        return fetch(`http://localhost:8088/Toolstable/${param}`, {
            method: "DELETE"
        })

    }

    const editBorrow = param => {
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
            borrow, addBorrow, getBorrow, getBorrowById, DeleteBorrow, editBorrow
        }}>
            {props.children}
        </BorrowContext.Provider>
    )
}