import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { BorderedContainer } from "../base/BorderedContainer";
import { TextInput } from "../base/TextInput";
import { SendButton } from "./style";
import Palette from "../../assets/palette";

export function MessageField() {
  return (
    <BorderedContainer className="message-field">
      <TextInput placeholder="Send a message"/>
      <SendButton><PaperAirplaneIcon fontSize={16} color={Palette.chats}/></SendButton>
    </BorderedContainer>
  )
}