import styled from "styled-components"
import Palette from "../../assets/palette"

export const Container = styled.div`
  width: 46px;
  height: 46px;

  border-radius: 50%;

  overflow: hidden;
`

export const NoImage = styled.div`
  height: 100%;
  width: 100%;

  background-color: ${Palette.details};
`