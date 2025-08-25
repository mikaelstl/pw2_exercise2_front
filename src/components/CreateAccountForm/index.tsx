import { Label } from "../base/Label";
import { TextInput } from "../base/TextInput";
import { BorderedContainer } from "../base/BorderedContainer";
import { Title } from "../base/Title";
import { Container, Field, Form, Submit } from "./style";
import { Text } from "../base/Text";
import { useState } from "react";
import type { UserData } from "../../pages/CreateAccount";

interface CreateAccountFormProps {
  onSubmit?: (data: UserData) => Promise<void> | void;
};

export function CreateAccountForm(props: CreateAccountFormProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string; global?: string }>({});

  function validate() {
    const next: typeof errors = {};
    if (!username.trim()) next.username = "Informe seu usuário.";

    if (!email.trim()) next.email = "Informe seu e-mail.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "E-mail inválido.";

    if (!password) next.password = "Informe sua senha.";
    else if (password.length < 6) next.password = "Mínimo de 6 caracteres.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const handleForm = async (ev: React.FormEvent) => {
    ev.preventDefault();

    if (!validate()) return;

    try {
      const user: UserData = {
        name: username,
        email,
        password
      }

      props.onSubmit?.(user);
      
    } catch (err: any) {
      setErrors({ global: err?.message || "Falha no login. Tente novamente." });
    }

  }

  return (
    <Container className="login-form">
      <Title>Crie sua conta</Title>

      <Form action="" onSubmit={handleForm}>
        <Field>
          <Label htmlFor="username">Username</Label>
          <BorderedContainer>
            <TextInput
              name="username"
              type="text"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </BorderedContainer>
        </Field>

        <Field>
          <Label htmlFor="email">E-mail</Label>
          <BorderedContainer>
            <TextInput
              name="email"
              type="text"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </BorderedContainer>
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <BorderedContainer>
            <TextInput
              name="password"
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}  
            />
          </BorderedContainer>
        </Field>

        <Submit
          type="submit"
        >
          <Text>Criar conta</Text>
        </Submit>
      </Form>
    </Container>
  )
}