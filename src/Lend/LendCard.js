import React from "react"
import "./Lend.css"
import { useHistory } from "react-router-dom"


export const ToolCard = ({ tool }) => {
    const history = useHistory();

    return (
        <div className="LendToolsIAmLendingCard">
            <img className="LendToolMeOncePicture" src="Images/Cat.jpg" alt="Logo" />
            <div className="LendToolInfoContainer">
                <div className="LendEditToolButtonContainer">
                    <button className="LendEditToolButton"

                        type="button">Edit this Tool</button>
                    <button className="LendDeleteToolButton" type="button">Delete this Tool</button>
                </div>
                <div className="LendToolName">Tool Name:  {tool.id}</div>
                <div className="LendToolDescription">Tool Description:  {tool.tooldescription}</div>
                <div className="LendToolSpecs">Tool Specifications:  {tool.toolspecs}</div>
                <div className="LendToolAccessories">Tool Accessories:  {tool.accessories}</div>
                <div className="LendLenderEmail">Lender Email:  {tool.lenderid}</div>
            </div>
        </div>
    )
}



/* <section className="lendLog">
        <h3 name="renderedMessage" className="chat_message">{chat.message}</h3>
        <p className="chatCardUser">Posted by @User{chat.userId}</p>
        <Link to={`/chats/detail/${chat.id}`}> Message Options  </Link>
    </section> */