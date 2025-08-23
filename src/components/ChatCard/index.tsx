import Avatar from "../Avatar";
import { Title } from "../base/Title";
import { Container } from "./style";

interface ChatCardProps {
  name: string;

}

export default function ChatCard(props:ChatCardProps) {
  return (
    <Container className="chat-card">
      <Avatar alt="image"/>
      <Title>{props.name}</Title>
    </Container>
  )
}