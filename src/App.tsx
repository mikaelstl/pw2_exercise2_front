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
  grid-template-rows: 1fr 200px;

  height: 100vh;

  overflow: hidden;

  border: 1px solid red;
`

function App() {
  return (
    <Content className="chat-application">
      <ChatsContainer chats={[]}/>
      <ChatArea/>
      <MessageField/>
    </Content>
  )
}

export default App
