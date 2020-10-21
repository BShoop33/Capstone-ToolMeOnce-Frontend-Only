import React, { useContext, useEffect, useState } from "react"
import { ChatContext } from "./ChatProvider"

import { useParams, useHistory } from "react-router-dom"

export const ChatDetail = () => {
    const { getChatById, deleteChat } = useContext(ChatContext)
    const [chat, setChat] = useState({})
    const history = useHistory();
    const { chatId } = useParams();

    useEffect(() => {
        getChatById(chatId)
            .then((response) => {
                setChat(response)
            })
    }, [])

    return (
        <section className="chat">
            <h3 className="chat__message">{chat.message}</h3>
            <div className="chat__userId">@{chat.userId}</div>
            <button onClick={
                () => {
                    deleteChat(chat.id)
                        .then(() => {
                            history.push("/chats")
                        })
                }

            }>Delete Message</button>

            {/* used in chapter 13 start*/}
            <button onClick={() => {
                history.push(`/chats/edit/${chat.id}`)
            }}>Edit Message</button>
            {/* used in chapter 13 end */}

        </section>
    )
}