import { ItalicTitle } from "../base/ItalicTitle";
import { NewChatBtn } from "../buttons/NewChatBtn";
import ChatCard from "../ChatCard";
import { Container } from "./style";

export interface ChatInfo {
  name: string;
  photo?: string;
}

interface ChatsContainerProps {
  chats: ChatInfo[]
}

export function ChatsContainer(props: ChatsContainerProps) {
  return (
    <Container className="chats-container">
      <NewChatBtn/>
      {
        props.chats.length !== 0 
        ? props.chats.map(
            (chat)=><ChatCard name={chat.name}/>
          )
        : <ItalicTitle>No Chats</ItalicTitle>
      }
    </Container>
  )
}