import styled, { css } from 'styled-components';
import { media } from '../../utils/styled-components/functions';

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.6);
  z-index: 2;
`

export const ModalBody = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 0;
  padding: 56.25% 0 0 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  background: #000;

  ${props => {
    const { screens } = props.theme;

    return Object.keys(screens).map(screen => css`
      ${media[screen]`
        max-width: ${screens[screen].container}px;

        if ()
      `}
    `)
  }}
`

export const Body = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
