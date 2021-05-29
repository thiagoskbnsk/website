import styled from "styled-components"
import { H1, H2 } from "../../utils/styled-components/typography"

export const HeroWrapper = styled.div``

export const Title = styled(H1)`
  color: ${props => props.theme.colors.white};
  font-size: 3.56rem;
  margin-bottom: 16px;
`

export const Subtitle = styled(H2)`
  color: ${props => props.theme.colors.default};
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 24px;
`

export const ImgMarkdown = styled.div`
  width: 100%;
  height: 100%;
  background: url("https://programadoresbrasil.com.br/wp-content/uploads/2019/10/0_fUJ-vxQtDB0ssLX7.jpeg") no-repeat;
  position: relative;
  background-size: cover;
  filter: brightness(0.5);
  border: 1px solid #fff;
  padding: 56.25% 0 0 0;
`

export const ModalLink = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  outline: none;
`

export const Circle = styled.div`
  color: #fff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);

  svg {
    font-size: 70px;
  }
`

export const Content = styled.div`
  padding: 48px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
