import React from "react"

import { Container, Row, Col } from "../../utils/styled-components/components"

import { SectionWrapper, Title, ChildrenComponent, ShadowContainer, ContentWrapper } from "./styled"

const Carousel = ({ title, children }) => (
  <SectionWrapper>
    <ShadowContainer />
    <Container>
      <Row>
        <Col>
          <Title>{title}</Title>
        </Col>
      </Row>
    </Container>
    <ContentWrapper>
      <Container>
        <Row>
          <Col>
            <ChildrenComponent>{children}</ChildrenComponent>
          </Col>
        </Row>
      </Container>
    </ContentWrapper>
  </SectionWrapper>
)

export default Carousel
