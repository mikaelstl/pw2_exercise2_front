import styled from "styled-components";
import Palette from "../../assets/palette";

const Container = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;

  width: 100%;

  padding: 12px;

  border-radius: 8px;
  background-color: ${({ $isActive }) =>
    $isActive ? Palette.chat_hover : "transparent"};

  &:hover {
    background-color: ${Palette.chat_hover};
  }
`

export { Container }