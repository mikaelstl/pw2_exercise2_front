import { PlusIcon } from "@heroicons/react/16/solid";
import { Button } from "./style";
import { Text } from "../../base/Text";

export function NewChatBtn() {
  return (
    <>
      <Button>
        <PlusIcon style={{ width: 24, height: 24 }}/>
        <Text>New Chat</Text>
      </Button>
    </>
  )
}