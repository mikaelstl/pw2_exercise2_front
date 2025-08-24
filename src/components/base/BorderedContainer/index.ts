import styled from "styled-components";
import Palette from "../../../assets/palette";

const BorderedContainer = styled.div`
  display: flex;

  width: 100%;
  height: min-content;

  border: 2px solid ${Palette.details};
  border-radius: 6px;

  padding: 12px;
`;

export {
  BorderedContainer
}