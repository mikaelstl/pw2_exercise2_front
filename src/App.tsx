import styled from "styled-components"
import { ChatsContainer, type ChatInfo } from "./components/ChatsContainer"
import { MessageField } from "./components/MessageField"
import { ChatArea } from "./components/ChatArea"

const chats: ChatInfo[] = [
  {
    name: "user1"
  },
  {
    name: "user2"
  },
  {
    name: "user2"
  }
]

const Content = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;

  height: 100vh;

  overflow: hidden;
`

function App() {
  return (
    <Content className="chat-application">
      <ChatsContainer chats={chats}/>
      <ChatArea/>
      <MessageField/>
    </Content>
  )
}

export default App
