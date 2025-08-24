import { PlusIcon } from "@heroicons/react/16/solid";
import { Button } from "./style";
import { Text } from "../../base/Text";

export function NewChatBtn() {
  return (
    <>
      <Button className="new-chat-btn"
        onClick={
          () => console.log("TO-DO new screen or pop-up to select new chat")
        }
      >
        <PlusIcon style={{ width: 24, height: 24 }}/>
        <Text className="button-label">New Chat</Text>
      </Button>
    </>
  )
}