import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BorderedContainer } from "../base/BorderedContainer";
import { TextInput } from "../base/TextInput";
import { Margin, SendButton } from "./style";
import Palette from "../../assets/palette";

export function MessageField() {
  return (
    <Margin>
      <BorderedContainer className="message-field">
        <TextInput placeholder="Mande uma mensagem"/>
        <SendButton><PaperAirplaneIcon fontSize={16} color={Palette.chats}/></SendButton>
      </BorderedContainer>
    </Margin>
  )
}