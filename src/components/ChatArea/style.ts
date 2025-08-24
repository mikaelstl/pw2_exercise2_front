import styled from "styled-components";
import Palette from "../../assets/palette";

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 0px 24px;

  .my-messages {
    background-color: ${Palette.message};
    border-top-right-radius: 64px;
    border-bottom-right-radius: 12px;

    align-self: flex-end;
  }

  .recived-messages {
    background-color: ${Palette.chats};
    border-top-left-radius: 64px;
    border-bottom-left-radius: 12px;
  
    align-self: flex-start;
  }
`;

export {
  Container,
}