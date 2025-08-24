import { useState } from "react";
import { BorderedContainer } from "../base/BorderedContainer";
import { ItalicTitle } from "../base/ItalicTitle";
import { TextInput } from "../base/TextInput";
import { NewChatBtn } from "../buttons/NewChatBtn";
import ChatCard from "../ChatCard";
import { Chats, Container, Margin } from "./style";

export interface ChatInfo {
  name: string;
  photo?: string;
}

interface ChatsContainerProps {
  chats: ChatInfo[]
}

export function ChatsContainer(props: ChatsContainerProps) {
  const [searched, setSearched] = useState('');
  
  const chats = props.chats.filter(
    (chat) => chat.name.includes(searched)
  )
  
  return (
    <Container className="chats-container">
      <NewChatBtn/>
      <BorderedContainer>
        <TextInput
          type="text"
          placeholder="Search chats..."
          value={searched}
          onChange={(event) => setSearched(event.target.value)}
        />
      </BorderedContainer>
      <Chats>
        {
          props.chats.length !== 0 
          ? chats.map(
              (chat, index)=><ChatCard key={index} name={chat.name}/>
            )
          : <Margin><ItalicTitle>No Chats</ItalicTitle></Margin>
        }
      </Chats>
    </Container>
  )
}