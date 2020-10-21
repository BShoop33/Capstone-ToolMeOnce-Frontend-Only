import React, { useContext, useEffect, useState } from "react"

import { useHistory, useParams } from 'react-router-dom';
import "./AddaNewTool.css"

export const AddToolPage = () => {
    const history = useHistory();



    const [Tools, setTools] = useState([])




    return (
        <>
            <body className="main">
                <div className="AddTool">
                    <h2 className="AddToolTitle">Add a New Tool</h2>
                    <div className="NewToolContainer">
                        <img className="AddToolPicture" src="/Images/Cat.jpg" alt="Logo" />
                        <div className="NewToolInputs">
                            <div className="AddToolNameInputBorder">
                                <input type="text" id="AddToolNameInput" name="AddToolNameInput" required autoFocus className="AddToolNameInput"
                                    placeholder="Enter your tool's name here"
                                />
                            </div>
                            <div className="AddToolDescriptionInputBorder">
                                <textarea id="AddToolDescriptionInput" name="AddToolDescriptionInput" required autoFocus className="AddToolDescriptionInput"
                                    placeholder="Enter your tool's description here"
                                />
                            </div>
                            <div className="AddToolSpecificationsInputBorder">
                                <textarea id="AddToolSpecificationsInput" name="AddToolSpecificationsInput" required autoFocus className="AddToolSpecificationsInput"
                                    placeholder="Enter your tool's specifications here"
                                />
                            </div>
                            <div className="AddToolAccessoriesInputBorder">
                                <textarea id="AddToolAccessoriesInput" name="AddToolAccessoriesInput" required autoFocus className="AddToolAccessoriesInput"
                                    placeholder="Enter your tool's accessories here"
                                />
                            </div>
                            <div className="AddToolButtonsContainer">
                                <button className="AddToolSaveButton" type="button">Save Tool</button>
                                <button className="AddToolCancelButton" onClick={() => { history.push(`/lend`) }} type="button">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
        </>
    )
}


