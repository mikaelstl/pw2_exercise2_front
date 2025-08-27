import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BorderedContainer } from "../base/BorderedContainer";
import { TextInput } from "../base/TextInput";
import { Margin, SendButton } from "./style";
import Palette from "../../assets/palette";
import { useState } from "react";

interface MessageFieldProps {
  id: string;
  onSend: (id: string, content: string) => void;
}

export function MessageField({ id, onSend }: MessageFieldProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(id, input)
    setInput("");
  };

  return (
    <Margin>
      <BorderedContainer className="message-field">
        <TextInput
          value={input}
          placeholder="Mande uma mensagem"
          onChange={({ target }) => setInput(target.value)}
        />
        <SendButton onClick={handleSend}>
          <PaperAirplaneIcon fontSize={16} color={Palette.chats} />
        </SendButton>
      </BorderedContainer>
    </Margin>
  );
}