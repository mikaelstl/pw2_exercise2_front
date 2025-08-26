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

const Footer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #a5b4fc;
  font-weight: 600;
  padding: 0;
  &:hover { text-decoration: underline; }
`;

export {
  Container,
  Field,
  Form,
  Submit,
  Footer,
  LinkButton
}