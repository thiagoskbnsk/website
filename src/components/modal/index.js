import React from 'react';

import { ModalWrapper, ModalBody, Body } from './styled';

import { BlockOverflowBody } from '../../utils/styled-components/components';

const Modal = ({ children, closeAction }) => {
  return (
    <ModalWrapper onClick={closeAction}>
      <BlockOverflowBody />
      <ModalBody>
        <Body>
          {children}
        </Body>
      </ModalBody>
    </ModalWrapper>
  )
}

export default Modal;