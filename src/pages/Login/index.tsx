import styled from "styled-components"
import { LoginForm } from "../../components/LoginForm";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  overflow: hidden;
`;

function Login() {
  return (
    <Content className="login">
      <LoginForm/>
    </Content>
  )
}

export default Login;