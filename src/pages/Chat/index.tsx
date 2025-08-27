import styled from "styled-components"
import { ChatsContainer } from "../../components/ChatsContainer"
import { ChatArea } from "../../components/ChatArea"
import { MessageField } from "../../components/MessageField"
import { useEffect, useRef, useState } from "react"
import { api } from "../../service/api"

const Content = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;

  height: 100vh;

  overflow: hidden;
`;

export interface User {
  id: string;
  name: string;
  email: string;
}

function Chat() {
  const [users, setUsers] = useState<User[]>([]);
  const [chatId, setChatId] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") as string) as User);
  
  const socketRef = useRef<WebSocket | null>(null);

  const loadMessages = (id: string) => {
    api.get("/messages").then((response) => {
      const filtered = response.data.filter(
        (m: { authorId: string; reciverId: string }) =>
          (m.authorId === id && m.reciverId === user.id) ||
          (m.reciverId === id && m.authorId === user.id)
      );
      
      setMessages(filtered);
    });
  };

  const sendMessage = (chatId: string, content: string) => {
    console.log('sendMessage', chatId, content)
    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
      console.error("❌ WebSocket não está aberto");
      return;
    }
    
    console.log("📤 Enviando para WS:", { content, userId: user.id, reciverId: chatId });

    socketRef.current.send(
      JSON.stringify({
        content,
        userId: user.id,
        reciverId: chatId,
      })
    );
  };

  useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data.filter((u: User) => u.id != user.id));
    });

    const socket = new WebSocket("ws://localhost:3000");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("Conectado ao WebSocket ✅");

      socket.send(
        JSON.stringify({
          type: "auth",
          userId: user.id,
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Mensagem recebida:", data);

      setMessages((prev) => [...prev, data]);
    };

    socket.onclose = () => {
      console.log("WebSocket fechado ❌");
    };

    return () => socket.close();
  }, []);

  return (
    <Content className="chat-application">
      <ChatsContainer
        chats={users}
        chatId={chatId}
        selectChat={(id: string) => {
          setChatId(id);
          loadMessages(id);
        }}
      />
      <ChatArea messages={messages} />
      <MessageField id={chatId} onSend={sendMessage} />
    </Content>
  );
}

export default Chat;