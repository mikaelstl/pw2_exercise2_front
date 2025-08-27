import { useAuth } from "../../hooks/useAuth";
import type { User } from "../../pages/Chat";
import { MessageCard } from "../MessageCard";
import { Container } from "./style";

export interface Message {
  id: string;
  content: string;
  createdAt: string; 
  authorId: string;
  reciverId: string;
  author: User;
  reciver: User;
}

interface ChatAreaProps {
  messages: Message[];
}

export function ChatArea({ messages }: ChatAreaProps) {
  const { user } = useAuth();
  
  return (
    <Container className="chat-area">
      {messages.map((msg, index) => (
        <MessageCard
          key={index}
          className={`chat-message ${msg.authorId === user?.id ? 'sended' : 'recived'}`}
          message={msg.content}
        />
      ))}
    </Container>
  );
}