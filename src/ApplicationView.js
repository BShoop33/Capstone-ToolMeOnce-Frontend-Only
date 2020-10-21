import React from "react";
import { Route } from "react-router-dom";
import { LendProvider } from "./Lend/LendDataProvider.js"
import { BorrowPage } from "./Borrow/BorrowList.js"
import { LendList } from "./Lend/LendList.js"
import { AddToolPage } from "./Lend/AddaNewToolForm.js"
import { ProfilePage } from "./EditProfile/EditProfile.js"
import { ContactLenderPage } from "./ContactaLender/ContactLender.js"


export const ApplicationViews = () => {
    return (
        <>
            <LendProvider>
                <Route exact path="/lend">
                    <LendList />
                </Route>
            </LendProvider>



            <LendProvider>
                <Route exact path="/lend/addnewtool">
                    <AddToolPage />
                </Route>
            </LendProvider>

            <Route exact path="/lend/borrow">
                <BorrowPage />
            </Route>

            <Route exact path="/lend/profile">
                <ProfilePage />
            </Route>

            <Route exact path="/lend/contact">
                <ContactLenderPage />
            </Route>


        </>
    )
}




// <ChatProvider>
// <Route exact path="/chats/create">
//     <ChatForm />
// </Route>
// </ChatProvider>

// <ChatProvider>
// <Route exact path="/chats/edit/:chatId(\d+)">
//     <ChatForm />
// </Route>
// </ChatProvider>

// <ChatProvider>
// <Route exact path="/chats">
//     <ChatList />
// </Route>
// </ChatProvider>

// <ChatProvider>
// <Route exact path="/chats/detail/:chatId(\d+)">
//     <ChatDetail />
// </Route>
// </ChatProvider>




//              <FriendsProvider>
//                 <Route exact path="/friends/create">
//                     <FriendForm />
//                 </Route>
//             </FriendsProvider>
//             <ArticlesProvider>
//                 <Route exact path="/articles">
//                     <ArticleSearch />
//                     <ArticlesList />
//                 </Route>
//             </ArticlesProvider>
//             <ArticlesProvider>
//                 <Route exact path="/articles/detail/:articleId(\d+)">
//                     <ArticleDetail />
//                 </Route>
//             </ArticlesProvider>
//             <ArticlesProvider>
//                 <Route exact path="/articles/create">
//                     <ArticleForm />
//                 </Route>
//             </ArticlesProvider>
//             <ArticlesProvider>
//                 <Route exact path="/articles/edit/:articleId(\d+)">
//                     <ArticleForm />
//                 </Route>
//             </ArticlesProvider>
//             <TasksProvider>
//                 <Route exact path="/tasks">
//                     <TasksList />
//                 </Route>
//             </TasksProvider>
//             <TasksProvider>
//                 <Route exact path="/tasks/create">
//                     <TasksForm />
//                 </Route>
//             </TasksProvider>
//             <TasksProvider>
//                 <Route exact path="/tasks/detail/:tasksId(\d+)">
//                     <TasksDetail />
//                 </Route>
//             </TasksProvider>
//             <TasksProvider>
//                 <Route exact path="/tasks/edit/:tasksId(\d+)">
//                     <TasksForm />
//                 </Route>
//             </TasksProvider>
//             <EventProvider>
//                 <Route exact path="/events">
//                     <EventSearch />
//                     <EventList />
//                 </Route>
//             </EventProvider>
//             <EventProvider>
//                 <Route exact path="/events/detail/:eventId(\d+)">
//                     <EventDetail />
//                 </Route>
//             </EventProvider>
//             <EventProvider>
//                 <Route exact path="/events/create">
//                     <EventForm />
//                 </Route>
//             </EventProvider>
//             <EventProvider>
//                 <Route exact path="/events/edit/:eventId(\d+)">
//                     <EventForm />
//                 </Route>
//             </EventProvider>