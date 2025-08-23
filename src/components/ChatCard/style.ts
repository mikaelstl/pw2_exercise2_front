import styled from "styled-components";
import Palette from "../../assets/palette";

const Container = styled.div`
  display: flex;
  gap: 12px;

  width: 100%;

  padding: 8px;

  border-bottom: 1px solid ${Palette.details};
`

export { Container }