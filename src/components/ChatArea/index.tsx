import { MessageCard } from "../MessageCard";
import { Container } from "./style";

export function ChatArea() {
  return (
    <Container className="chat-area">
      <MessageCard className="chat-message sended"/>
      <MessageCard className="chat-message recived"/>
    </Container>
  )
}