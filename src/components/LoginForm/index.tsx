import { Label } from "../base/Label";
import { TextInput } from "../base/TextInput";
import { BorderedContainer } from "../base/BorderedContainer";
import { Title } from "../base/Title";
import { Container, Field, Footer, Form, LinkButton, Submit } from "./style";
import { Text } from "../base/Text";
import { Divider } from "../base/Divider";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

interface Login {
  email: string, password: string
}
export function LoginForm() {
  const navigate = useNavigate();
  const [login, setLogin] = useState<Login>({} as Login);
  const { login: onLogin } = useAuth();

  const handleLogin = () => {
    api.post('/login', login).then((response) => {
      onLogin(response.data.user);
      navigate('/chat')
    })
  }

  const handleCreateAccount = () => {
    navigate('/create-account')
  }

  return (
    <Container className="login-form">
      <Title>Chat.io</Title>

      <Form action="">

        <Field>
          <Label htmlFor="username">Usuário</Label>
          <BorderedContainer>
            <TextInput name="username" type="text" onChange={({ target }) => setLogin(prev => ({ ...prev, email: target.value }))} />
          </BorderedContainer>
        </Field>

        <Field>
          <Label htmlFor="password">Senha</Label>
          <BorderedContainer>
            <TextInput name="password" type="password" onChange={({ target }) => setLogin(prev => ({ ...prev, password: target.value }))} />
          </BorderedContainer>
        </Field>

        <Submit type="button" onClick={() => handleLogin()}>
          <Text>Entrar</Text>
        </Submit>

      </Form>

      <Divider />

      <Footer>
        <Text>Não tem conta?</Text>
        <LinkButton type="button" onClick={handleCreateAccount}>
          Criar conta
        </LinkButton>
      </Footer>
    </Container>
  )
}