import { Text } from "../base/Text";
import { Container } from "./style";

interface MessageCardProps {
  className: string
  message: string
}

export function MessageCard(props: MessageCardProps) {
  return (
    <Container className={props.className}>
      <Text>{props.message}</Text>
    </Container>
  )
}