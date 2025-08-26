import { Label } from "../base/Label";
import { TextInput } from "../base/TextInput";
import { BorderedContainer } from "../base/BorderedContainer";
import { Title } from "../base/Title";
import { Container, Field, Form, Submit } from "./style";
import { Text } from "../base/Text";
import { Divider } from "../base/Divider";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/chat')
  }

  const handleCreateAccount = () => {
    navigate('/create-account')
  }

  return (
    <Container className="login-form">
      <Title>Chat.io</Title>

      <Form action="">

        <Field>
          <Label htmlFor="username">Username</Label>
          <BorderedContainer>
            <TextInput name="username" type="text"/>
          </BorderedContainer>
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <BorderedContainer>
            <TextInput name="password" type="password"/>
          </BorderedContainer>
        </Field>

        <Submit type="button" onClick={handleLogin}>
          <Text>Entrar</Text>
        </Submit>

      </Form>

      <Divider/>

      <Footer>
        <Text>Não tem conta?</Text>
        <LinkButton type="button" onClick={handleCreateAccount}>
          Criar conta
        </LinkButton>
      </Footer>
    </Container>
  )
}

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

{/* <form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form> */}

