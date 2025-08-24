import styled from "styled-components";
import Palette from "../../assets/palette";

const SendButton = styled.button`
  width: 32px;
  height: 32px;

  border: none;
  border-radius: 6px;
  background-color: ${Palette.action_buttons};

  padding: 4px;
`

export {
  SendButton
}