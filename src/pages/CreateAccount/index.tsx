import styled from "styled-components"
import { CreateAccountForm } from "../../components/CreateAccountForm";
import api from "../../lib/api";
import type { User } from "../../lib/types/user";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  overflow: hidden;
`;

function CreateAccount() {
  const onSubmit = (data: User) => {
    api.post("/users", data).then(response => {
      console.log(response);
    })
  }

  return (
    <Content className="create-acount-page">
      <CreateAccountForm onSubmit={onSubmit}/>
    </Content>
  )
}

export default CreateAccount;