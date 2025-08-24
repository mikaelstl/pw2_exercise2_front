import styled from "styled-components";
import Palette from "../../assets/palette";

const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  width: 100%;

  padding: 12px;

  border-radius: 8px;

  &:hover {
    background-color: ${Palette.chat_hover};
  }
`

export { Container }