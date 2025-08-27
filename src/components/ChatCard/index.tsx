import Avatar from "../Avatar";
import { Title } from "../base/Title";
import { Container } from "./style";

interface ChatCardProps {
  name: string;
  onClick: () => void;
  isActive: boolean
}

export default function ChatCard(props:ChatCardProps) {
  return (
    <Container className="chat-card" $isActive={props.isActive} onClick={() => props.onClick()}>
      <Avatar alt="image"/>
      <Title>{props.name}</Title>
    </Container>
  )
}