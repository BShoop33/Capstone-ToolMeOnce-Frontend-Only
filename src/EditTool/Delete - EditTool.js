// import React from "react"
// import "./EditTool.css"
// import { useHistory } from "react-router-dom"
// export const EditToolPage = () => {
//     const history = useHistory();



//     return (
//         <>
//             <body className="editToolmain">
//                 <div className="EditTool">
//                     <h2 className="EditToolTitle">Edit Tool</h2>
//                     <div className="EditToolContainer">
//                         <img className="EditToolToolMeOnceEditToolPicture" src="/Images/Cat.jpg" alt="Logo" />
//                         <div className="EditToolInputsContainer">
//                             <div className="EditToolNameInputBorder">
//                                 <input type="text" id="EditToolToolNameInput" name="EditToolToolNameInput" required autoFocus className="EditToolToolNameInput"
//                                     placeholder="Enter your tool's name changes here"
//                                 />
//                             </div>
//                             <div className="EditToolDescriptionInputBorder">
//                                 <textarea id="EditToolDescriptionInput" name="EditToolDescriptionInput" required autoFocus className="EditToolDescriptionInput"
//                                     placeholder="Enter your tool's description changes here"
//                                 />
//                             </div>
//                             <div className="EditToolSpecificationsInputBorder">
//                                 <textarea id="EditToolSpecificationsInput" name="EditToolSpecificationsInput" required autoFocus className="EditToolSpecificationsInput"
//                                     placeholder="Enter your tool's specifications changes here"
//                                 />
//                             </div>
//                             <div className="EditToolAccessoriesInputBorder">
//                                 <textarea id="EditToolAccessoriesInput" name="EditToolAccessoriesInput" required autoFocus className="EditToolAccessoriesInput"
//                                     placeholder="Enter your tool's accessories changes here"
//                                 />
//                             </div>

//                             <div className="EditToolEditsButtonsContainer">
//                                 <button className="EditToolSaveToolEditsButton"
//                                     onClick={() => { history.push(`/lend`) }}
//                                     type="button">Save Edits</button>
//                                 <button className="EditToolCancelToolEditsButton"
//                                     onClick={() => { history.push(`/lend`) }}
//                                     type="button">Cancel</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </body>
//             <footer className="LendPageFooter">&copy; Tool Me Once, 2020</footer>
//         </>
//     )
// }


