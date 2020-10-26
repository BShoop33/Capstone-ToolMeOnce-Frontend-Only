import React from "react";
import { Route } from "react-router-dom";
import { BorrowPage } from "./Borrow/BorrowList.js"
import { BorrowProvider } from "./Borrow/BorrowDataProvider.js"
import { ContactLenderPage } from "./ContactaLender/ContactLenderList.js"
import { ProfilePage } from "./EditProfile/EditProfileList.js"
import { ProfileProvider } from "./EditProfile/EditProfileDataProvider.js"


import { LendList } from "./Lend/LendList.js"
import { LendProvider } from "./Lend/LendDataProvider.js"
import { LendForm } from "./Lend/LendForm.js"
import { ToolCardButtonsContainer } from "./Lend/LendDetail.js"

export const ApplicationViews = () => {
    return (
        <>
            <BorrowProvider>
                <Route exact path="/lend/borrow">
                    <BorrowPage />
                </Route>
            </BorrowProvider>

            <BorrowProvider>
                <Route exact path="/lend/contact">
                    <ContactLenderPage />
                </Route>
            </BorrowProvider>

            <ProfileProvider>
                <Route exact path="/lend/profile">
                    <ProfilePage />
                </Route>
            </ProfileProvider>




            <LendProvider>
                <Route exact path="/lend/toolchangepage/addnewtool">
                    <LendForm />
                </Route>
            </LendProvider>

            <LendProvider>
                <Route exact path="/lend/toolchangepage/:toolId(\d+)">
                    <LendForm />
                </Route>
            </LendProvider>

            <LendProvider>
                <Route exact path="/lend">
                    <LendList />
                </Route>
            </LendProvider>

            <LendProvider>
                <Route exact path="/lend/ToolCardButtonsContainer/:toolId(\d+)">
                    <ToolCardButtonsContainer />
                </Route>
            </LendProvider>


        </>
    )
}