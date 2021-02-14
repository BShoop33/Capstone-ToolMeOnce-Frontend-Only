import React, { useContext, useEffect } from "react"
import { BorrowContext } from "./BorrowDataProvider"
import { BorrowerMessagesCard } from "../ContactaLender/ContactLenderCard"
import { ContactContext } from "../ContactaLender/ContactLenderDataProvider"
import { ToolsIAmBorrowingCard } from "./ToolsIAmBorrowingCard"
import { ToolsICanBorrowCard } from "./ToolsICanBorrowCard"
import { useHistory } from "react-router-dom"
import "./Borrow.css"

export const BorrowList = () => {
    const { toolsIAmBorrowing, getBorrowToolsIAmBorrowing } = useContext(BorrowContext)
    const { toolsICanBorrow, getBorrowToolsICanBorrow } = useContext(BorrowContext)
    const { contact, getContact } = useContext(ContactContext)

    const history = useHistory();

    useEffect(() => {
        getBorrowToolsIAmBorrowing()
    }, [])

    useEffect(() => {
        getBorrowToolsICanBorrow()
    }, [])

    useEffect(() => {
        getContact()
    }, [])

    return (
        <>
            <header className="BorrowPageHeaderContainer">
                <img alt="Logo" className="BorrowToolMeOnceLogo" src="/Images/ToolMeOnceLogo.jpg.png" />
                <div className="BorrowToolMeOnceTitleContainer">
                    <h1 className="BorrowToolMeOnceTitle">Tool - Me - Once</h1>
                </div>
                <div className="BorrowProfileandBorrowButtonContainer">
                    <button
                        className="BorrowLogOutButton"
                        onClick={() => {
                            localStorage.clear()
                            history.push(`/lend`)
                        }}
                        type="button">Log Out
                    </button>
                </div>
            </header>
            <div className="BorrowSubHeaderContainer">
                <button
                    className="BorrowGoToLendButton"
                    onClick={() => {
                        history.push(`/lend`)
                    }}
                    type="button">Go To Lend</button>
                <h2 className="BorrowPageTitle">Borrow</h2>
            </div>
            <div className="BorrowBodyContainer">
                <div className="BorrowToolsIAmBorrowingandToolsICanBorrowContainer">
                    <div className="BorrowToolsIAmBorrowingContainer">
                        <h2 className="BorrowToolsIAmBorrowingTitle">Tools I Am Borrowing</h2>
                        {
                            toolsIAmBorrowing.map(borrow => {
                                return <ToolsIAmBorrowingCard key={borrow.id} borrow={borrow} />
                            })
                        }
                    </div>
                    <div className="BorrowToolsICanBorrowContainer">
                        <h2 className="BorrowToolsICanBorrowTitle">Tools I Can Borrow</h2>
                        {
                            toolsICanBorrow.map(borrow => {
                                return <ToolsICanBorrowCard key={borrow.id} borrow={borrow} />
                            })
                        }
                    </div>
                </div>
                <div className="BorrowMessagesContainer">
                    <h2 className="BorrowMessagesTitle">Messages</h2>
                    {
                        contact.map(message => {
                            return < BorrowerMessagesCard key={message.id} message={message} />
                        })
                    }
                </div>
            </div>
            <footer className="BorrowPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}