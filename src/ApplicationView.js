import React from "react";
import { Route } from "react-router-dom";

import { BorrowList } from "./Borrow/BorrowList.js"
import { BorrowProvider } from "./Borrow/BorrowDataProvider.js"
import { ToolsIAmBorrowingCard } from "./Borrow/ToolsIAmBorrowingCard.js"
import { ToolsICanBorrowCard } from "./Borrow/ToolsICanBorrowCard.js"

import { ContactLenderPage } from "./ContactaLender/ContactLenderList.js"
import { ContactProvider } from "./ContactaLender/ContactLenderDataProvider.js"
import { ReplyProvider } from "./ReplyCard/ReplyDataProvider.js"

import { ProfilePage } from "./EditProfile/EditProfileList"
import { ProfileProvider } from "./EditProfile/EditProfileDataProvider.js"

import { LendList } from "./Lend/LendList.js"
import { LendProvider } from "./Lend/LendDataProvider.js"
import { LendForm } from "./Lend/LendForm.js"
import { ToolCardButtonsContainer } from "./Lend/LendDetail.js"

import { LendResponseProvider } from "./Response/LendResponseDataProvider"
import { LendResponsePage } from "./Response/LendResponseList"

export const ApplicationViews = () => {
    return (
        <>
            <LendProvider>
                <ContactProvider>
                    <BorrowProvider>
                        <Route exact path="/lend/borrow">
                            <BorrowList />
                        </Route>
                    </BorrowProvider>
                </ContactProvider>
            </LendProvider>

            <BorrowProvider>
                <Route exact path="/lend/borrow/ToolsIAmBorrowingCard/:borrowId(\d+)">
                    <ToolsIAmBorrowingCard />
                </Route>
            </BorrowProvider>

            <BorrowProvider>
                <Route exact path="/lend/borrow/ToolsICanBorrowCard/:borrowId(\d+)">
                    <ToolsICanBorrowCard />
                </Route>
            </BorrowProvider>



            <ContactProvider>
                <Route exact path="/lend/contact">
                    <ContactLenderPage />
                </Route>
            </ContactProvider>

            <ProfileProvider>
                <Route exact path="/lend/editprofile/:profileId(\d+)">

                    <ProfilePage />
                </Route>
            </ProfileProvider>



            <LendResponseProvider>
                <Route exact path="/lend">
                    <LendResponseProvider />
                </Route>
            </LendResponseProvider>

            <LendResponseProvider>
                <Route exact path="/lend/response">
                    <LendResponsePage />
                </Route>
            </LendResponseProvider>



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
                <ProfileProvider>
                    <ReplyProvider>
                        <LendResponseProvider>
                            <Route exact path="/lend">

                                <LendList />
                            </Route>
                        </LendResponseProvider>
                    </ReplyProvider>
                </ProfileProvider>
            </LendProvider>

            <LendProvider>
                <Route exact path="/lend/ToolCardButtonsContainer/:toolId(\d+)">
                    <ToolCardButtonsContainer />
                </Route>
            </LendProvider>
        </>
    )
}