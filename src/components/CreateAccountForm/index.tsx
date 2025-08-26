import { Label } from "../base/Label";
import { TextInput } from "../base/TextInput";
import { BorderedContainer } from "../base/BorderedContainer";
import { Title } from "../base/Title";
import { Container, Field, Form, Submit } from "./style";
import { Text } from "../base/Text";

export function CreateAccountForm() {
  return (
    <Container className="login-form">
      <Title>Crie sua conta</Title>

      <Form action="">
        <Field>
          <Label htmlFor="username">Username</Label>
          <BorderedContainer>
            <TextInput name="username" type="text"/>
          </BorderedContainer>
        </Field>

        <Field>
          <Label htmlFor="email">E-mail</Label>
          <BorderedContainer>
            <TextInput name="email" type="text"/>
          </BorderedContainer>
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <BorderedContainer>
            <TextInput name="password" type="password"/>
          </BorderedContainer>
        </Field>

        <Submit type="button">
          <Text>Criar conta</Text>
        </Submit>
      </Form>
    </Container>
  )
}