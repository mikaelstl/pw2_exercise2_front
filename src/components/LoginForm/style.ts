import styled from "styled-components";
import Palette from "../../assets/palette";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: ${Palette.chats};
  height: fit-content;
  padding: 20px;
  border-radius: 12px;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Form = styled.form`
  display: grid;
  gap: 12px;
`

const Submit = styled.button`
  font-weight: 600;

  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  border: none;
  border-radius: 6px;

  width: 100%;

  padding: 12px;
  
  background-color: white;
`

export {
  Container,
  Field,
  Form,
  Submit
}