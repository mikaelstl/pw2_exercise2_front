import { MessageCard } from "../MessageCard";
import { Container } from "./style";

export function ChatArea() {
  return (
    <Container className="chat-area">
      <MessageCard className="my-messages"/>
      <MessageCard className="recived-messages"/>
    </Container>
  )
}