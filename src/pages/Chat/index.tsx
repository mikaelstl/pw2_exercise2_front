import styled from "styled-components"
import { ChatsContainer, type ChatInfo } from "../../components/ChatsContainer"
import { ChatArea } from "../../components/ChatArea"
import { MessageField } from "../../components/MessageField"

const chats: ChatInfo[] = [
  {
    name: "user1"
  },
  {
    name: "user2"
  },
  {
    name: "user3"
  }
]

const Content = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;

  height: 100vh;

  overflow: hidden;
`

function Chat() {
  return (
    <Content className="chat-application">
      <ChatsContainer chats={chats}/>
      <ChatArea/>
      <MessageField/>
    </Content>
  )
}

export default Chat