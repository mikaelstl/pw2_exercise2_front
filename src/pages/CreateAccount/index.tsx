import styled from "styled-components"
import { CreateAccountForm } from "../../components/CreateAccountForm";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export interface UserData {
  name: string;
  email: string;
  password: string;
}

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  overflow: hidden;
`;

function CreateAccount() {
  const navigate = useNavigate();

  const onSubmit = (data: UserData) => {
    api.post("/users", data).then(response => {
      alert('Conta criada')
      navigate('/')
    })
  }

  return (
    <Content className="create-acount-page">
      <CreateAccountForm onSubmit={onSubmit} />
    </Content>
  )
}

export default CreateAccount;