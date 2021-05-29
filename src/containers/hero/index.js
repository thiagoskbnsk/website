import React, { useState, useEffect } from "react"

import { Container, Row, Col } from "../../utils/styled-components/components"
import {
  HeroWrapper,
  Title,
  Subtitle,
  ImgMarkdown,
  ModalLink,
  Circle,
  Content,
} from "./styled"

import { ArrowRight } from "@material-ui/icons"

import Anchor from "../../components/anchor"
import Modal from "../../components/modal"
import If from "../../components/if"

const Hero = ({ videoLink, title, subtitle, ctaLink }) => {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (modal) window.addEventListener("keydown", keyDownHandler)

    return () => window.removeEventListener("keydown", keyDownHandler)
  }, [modal])

  const keyDownHandler = e => {
    if (e.keyCode === 27) setModal(false)
  }

  return (
    <HeroWrapper>
      <Container>
        <Row>
          <Col medium="6" alignItems="center">
            <div>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
              <Anchor href={ctaLink} target="_blank">
                let's chat
              </Anchor>
            </div>
          </Col>
          <Col medium="6">
            <Content>
              <ModalLink onClick={() => setModal(true)}>
                <ImgMarkdown>
                  <Circle>
                    <ArrowRight />
                  </Circle>
                </ImgMarkdown>
              </ModalLink>
              <If condition={modal}>
                <Modal closeAction={() => setModal(false)}>
                  <iframe
                    src={videoLink}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Presentation"
                  ></iframe>
                </Modal>
              </If>
            </Content>
          </Col>
        </Row>
      </Container>
    </HeroWrapper>
  )
}

export default Hero
