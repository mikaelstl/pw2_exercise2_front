import styled from "styled-components"
import { ChatsContainer, type ChatInfo } from "./components/ChatsContainer"

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
  grid-template: "chats-container chat-area" 100%
                 "chats-container chat-area" / auto 1fr;

  height: 100vh;

  overflow: hidden;

  border: 1px solid red;
`

function App() {
  return (
    <Content className="chat-application">
      <ChatsContainer chats={chats}/>
    </Content>
  )
}

export default App
