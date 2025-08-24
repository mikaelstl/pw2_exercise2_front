import { BorderedContainer } from "../base/BorderedContainer";
import { ItalicTitle } from "../base/ItalicTitle";
import { TextInput } from "../base/TextInput";
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
      <BorderedContainer>
        <TextInput type="text" placeholder="Search chats..."/>
      </BorderedContainer>
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