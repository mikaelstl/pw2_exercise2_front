import styled from "styled-components"
import { CreateAccountForm } from "../../components/CreateAccountForm";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  overflow: hidden;
`;

function CreateAccount() {
  return (
    <Content className="create-acount-page">
      <CreateAccountForm/>
    </Content>
  )
}

export default CreateAccount;