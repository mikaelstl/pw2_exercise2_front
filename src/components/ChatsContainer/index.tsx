import { useState } from "react";
import { BorderedContainer } from "../base/BorderedContainer";
import { ItalicTitle } from "../base/ItalicTitle";
import { TextInput } from "../base/TextInput";
import { NewChatBtn } from "../buttons/NewChatBtn";
import ChatCard from "../ChatCard";
import { Chats, Container, Margin } from "./style";
import type { User } from "../../pages/Chat";

interface ChatsContainerProps {
  chats: User[];
  selectChat: (id: string) => void;
  chatId: string;
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
          placeholder="Buscar conversas..."
          value={searched}
          onChange={(event) => setSearched(event.target.value)}
        />
      </BorderedContainer>
      <Chats>
        {
          props.chats.length !== 0 
          ? chats.map(
              (chat, index)=> <ChatCard 
                                isActive={props.chatId === chat.id} 
                                key={index} 
                                name={chat.name} 
                                onClick={() => props.selectChat(chat.id)}
                              />
            )
          : <Margin>
              <ItalicTitle>No Chats</ItalicTitle>
            </Margin>
        }
      </Chats>
    </Container>
  )
}