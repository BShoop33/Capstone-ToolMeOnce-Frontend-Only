import React from "react"
import "./Borrow.css"
import { useHistory } from "react-router-dom"

export const BorrowPage = () => {
    const history = useHistory();

    return (
        <>

            {/* <header className="LendPageHeaderContainer">
                <img className="LendToolMeOnceLogo" src="Images/ToolMeOnceLogo.jpg.png" alt="Logo" />

                <div className="LendToolMeOnceTitleContainer">
                    <h1 className="LendToolMeOnceTitle">Tool - Me - Once</h1>
                </div>
                <div className="LendProfileandBorrowButtonContainer">
                    <button className="LendEditProfile" type="button">Edit Profile</button>
                    <button className="LendGoToBorrowButton" type="button">Go To Borrow</button>

                </div>

            </header>
            <div className="LendSubHeaderContainer">
                <h2 className="LendPageTitle">Lend</h2>
            </div> */}



            <header className="BorrowPageHeaderContainer">
                <img className="BorrowToolMeOnceLogo" src="/Images/ToolMeOnceLogo.jpg.png" alt="Logo" />
                <div className="BorrowToolMeOnceTitleContainer">
                    <h1 className="BorrowToolMeOnceTitle">Tool - Me - Once</h1>
                </div>
                <div className="BorrowProfileandBorrowButtonContainer">
                    <button className="BorrowEditProfile"
                        onClick={() => { history.push(`/lend/profile`) }}
                        type="button">Edit Profile</button>
                    <button className="BorrowGoToLendButton"
                        onClick={() => { history.push(`/lend`) }}
                        type="button">Go To Lend</button>
                </div>
            </header>



            <div className="BorrowSubHeaderContainer">
                <h2 className="BorrowPageTitle">Borrow</h2>
            </div>
            <body className="BorrowBodyContainer">
                <div className="BorrowToolsIAmBorrowingandToolsICanBorrowContainer">
                    <div className="BorrowToolsIAmBorrowingContainer">
                        <h2 className="BorrowToolsIAmBorrowingTitle">Tools I Am Borrowing</h2>
                        <div className="BorrowToolsIAmBorrowingCard">
                            <img className="BorrowToolMeOncePicture" src="/Images/Cat.jpg" alt="Logo" />
                            <div className="BorrowToolInfoContainer">
                                <div className="ReturnButtonContainer">
                                    <button className="ReturnButton" type="button">Return Tool to Lender</button>
                                </div>
                                <div className="ToolInfoContainer">
                                    <div className="BorrowToolName">Tool Name:</div>
                                    <div className="BorrowToolDescription">Tool Description:</div>
                                    <div className="BorrowToolSpecs">Tool Specifications:</div>
                                    <div className="BorrowToolAccessories">Tool Accessories:</div>
                                    <div className="BorrowLenderEmail">Lender Email:  </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="BorrowToolsICanBorrowContainer">
                        <h2 className="BorrowToolsICanBorrowTitle">Tools I Can Borrow</h2>
                        <div className="BorrowToolsIAmBorrowingCard">
                            <img className="BorrowToolMeOncePicture" src="/Images/Cat.jpg" alt="Logo" />
                            <div className="BorrowToolInfoContainer">
                                <div className="BorrowButtonContainer">
                                    <button className="BorrowButton" type="button">Borrow this Tool</button>
                                </div>
                                <div className="BorrowToolName">Tool Name:</div>
                                <div className="BorrowToolDescription">Tool Description:</div>
                                <div className="BorrowToolSpecs">Tool Specifications:</div>
                                <div className="BorrowToolAccessories">Tool Accessories:</div>
                                <div className="BorrowLenderEmail">Lender Email:  </div>
                            </div>
                        </div>
                        <div className="BorrowToolsIAmBorrowingCard">
                            <img className="BorrowToolMeOncePicture" src="/Images/Cat.jpg" alt="Logo" />
                            <div className="BorrowToolInfoContainer">
                                <div className="BorrowButtonContainer">
                                    <button className="BorrowButton" type="button">Borrow this Tool</button>
                                </div>
                                <div className="BorrowToolName">Tool Name:</div>
                                <div className="BorrowToolDescription">Tool Description:</div>
                                <div className="BorrowToolSpecs">Tool Specifications:</div>
                                <div className="BorrowToolAccessories">Tool Accessories:</div>
                                <div className="BorrowLenderEmail">Lender Email:  </div>
                            </div>
                        </div>
                        <div className="BorrowToolsIAmBorrowingCard">
                            <img className="BorrowToolMeOncePicture" src="/Images/Cat.jpg" alt="Logo" />
                            <div className="BorrowToolInfoContainer">
                                <div className="BorrowButtonContainer">
                                    <button className="BorrowButton" type="button">Borrow this Tool</button>
                                </div>
                                <div className="BorrowToolName">Tool Name:</div>
                                <div className="BorrowToolDescription">Tool Description:</div>
                                <div className="BorrowToolSpecs">Tool Specifications:</div>
                                <div className="BorrowToolAccessories">Tool Accessories:</div>
                                <div className="BorrowLenderEmail">Lender Email:  </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="BorrowMessagesContainer">
                    <h2 className="BorrowMessagesTitle">Messages</h2>
                    <button className="BorrowContactALenderButton"
                        onClick={() => { history.push(`/lend/contact`) }}
                        type="button">Contact a Lender</button>
                </div>
            </body>
            <footer className="BorrowPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}