import React, { useContext, useEffect } from "react"
import { BorrowContext } from "./BorrowDataProvider"
import { BorrowerMessagesCard } from "../ContactaLender/ContactLenderCard"
import { ContactContext } from "../ContactaLender/ContactLenderDataProvider"
import { ToolsIAmBorrowingCard } from "./ToolsIAmBorrowingCard"
import { ToolsICanBorrowCard } from "./ToolsICanBorrowCard"
import { useHistory } from "react-router-dom"
import "./Borrow.css"

export const BorrowList = () => {

    //Stores the data returned by the useEffect hook and stores it as an array in the toolsIAmBorrowing variable
    const { toolsIAmBorrowing, getBorrowToolsIAmBorrowing } = useContext(BorrowContext)

    //Stores the data returned by the useEffect hook and stores it as an array in the toolsICanBorrow variable
    const { toolsICanBorrow, getBorrowToolsICanBorrow } = useContext(BorrowContext)

    //Stores the data returned by the useEffect hook and stores it as an array in the contact variable
    const { contact, getContact } = useContext(ContactContext)

    //Invokes the useHistory hook 
    const history = useHistory();

    //Runs the getBorrowToolsIAmBorrowing function in BorrowDataProvider once to pull the Toolstable data that has a toolstatus value of false and whose userid does not match the signed in user's registered email
    useEffect(() => {
        getBorrowToolsIAmBorrowing()
    }, [])

    //Runs the getBorrowToolsICanBorrow function in BorrowDataProvider once to pull the Toolstable data that has a toolstatus value of true and whose userid does not match the signed in user's registered email
    useEffect(() => {
        getBorrowToolsICanBorrow()
    }, [])

    //Runs the getContact function in ContactLenderDataProvider once to pull the Messages data that has userid values that match the signed in user's registered email
    useEffect(() => {
        getContact()
    }, [])

    return (
        <>
            <header className="BorrowPageHeaderContainer">
                <img className="BorrowToolMeOnceLogo" src="/Images/ToolMeOnceLogo.jpg.png" alt="Logo" />
                <div className="BorrowToolMeOnceTitleContainer">
                    <h1 className="BorrowToolMeOnceTitle">Tool - Me - Once</h1>
                </div>
                <div className="BorrowProfileandBorrowButtonContainer">
                    <button className="BorrowLogOutButton"
                        onClick={() => {
                            localStorage.clear()
                            history.push(`/lend`)
                        }}
                        type="button">Log Out
                    </button>
                </div>
            </header>
            <div className="BorrowSubHeaderContainer">
                <button className="BorrowGoToLendButton"
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
                        {/* Applies the .map method to the toolsIAmBorrowing array to pass that data to the ToolsIAmBorrowingCard */}
                        {
                            toolsIAmBorrowing.map(borrow => {
                                return <ToolsIAmBorrowingCard key={borrow.id} borrow={borrow} />
                            })
                        }
                    </div>
                    <div className="BorrowToolsICanBorrowContainer">
                        <h2 className="BorrowToolsICanBorrowTitle">Tools I Can Borrow</h2>
                        {/* Applies the .map method to the toolsICanBorrow array to pass that data to the ToolsICanBorrowCard */}
                        {
                            toolsICanBorrow.map(borrow => {
                                return <ToolsICanBorrowCard key={borrow.id} borrow={borrow} />
                            })
                        }
                    </div>
                </div>
                <div className="BorrowMessagesContainer">
                    <h2 className="BorrowMessagesTitle">Messages</h2>
                    <button className="BorrowContactALenderButton"
                        onClick={() => {
                            history.push(`/lend/contact`)
                        }}
                        type="button">Contact a Lender
                    </button>
                    {/* Applies the .map method to the contact array to pass that data to the BorrowerMessagesCard */}
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