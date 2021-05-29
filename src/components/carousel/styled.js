import styled, { css } from "styled-components"
import { Container } from "../../utils/styled-components/components"
import { H3 } from "../../utils/styled-components/typography"

export const SectionWrapper = styled.section`
  margin: 40px 0;
  position: relative;
`

export const Title = styled(H3)`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2.4px;
  color: ${props => props.theme.colors.white};
`

export const ChildrenComponent = styled.div`
  margin-top: 24px;
  padding-right: 200px;
`

const styleContainer = css`
  content: "";
  position: absolute;
  height: 100%;
  top: 0;
  width: 50%;
  z-index: 2;
  pointer-events: none;
`

export const ShadowContainer = styled(Container)`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  &:before {
    ${styleContainer}
    left: -50%;

    background: linear-gradient(to left,rgba(0,0,0,0), 15%, rgba(0,0,0,.8),rgba(0,0,0,.6),rgb(0,0,0));
  }

  &:after {
    ${styleContainer}
    right: -50%;

    background: linear-gradient(to right,rgba(0,0,0,0), 15%, rgba(0,0,0,.8),rgba(0,0,0,.6),rgb(0,0,0));
  }
`;

export const ContentWrapper = styled.div`
  overflow-x: auto;
  padding-bottom: 17px;
  position: relative;

  &:after {
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 17px;
    position: absolute;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
`;
