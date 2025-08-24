import styled from "styled-components";
import Palette from "../../assets/palette";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-row: 1 / 3;
  grid-column: 1;
  
  width: 520px;
  height: 100%;

  padding: 0px 12px;

  background-color: ${Palette.chats};
`;

const Chats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  grid-row: 1 / 3;
  grid-column: 1;
  
  width: 520px;
  height: 100%;

  padding: 0px 12px;
  margin-top: 10px;

  background-color: ${Palette.chats};
`;

const Margin = styled.div`
  margin-top: 40px;
`

export {
  Container,
  Chats,
  Margin
}