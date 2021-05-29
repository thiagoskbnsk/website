import React from "react"

import { Container, Row, Col } from "../../utils/styled-components/components"

import {
  FooterWrapper,
  Text,
  Email,
  LinkList,
  ItemList,
  ItemLink,
  ImgItem,
  ContentWrapper,
} from "./styled"

const Footer = ({ data }) => {
  const { text, email, items } = data

  const RenderMapItems = ({ items }) => {
    return items.map(({ title, link, img }) => (
      <ItemList key={title}>
        <ItemLink href={link} title={title} target="_blank">
          <ImgItem src={img} alt={title} />
        </ItemLink>
      </ItemList>
    ))
  }
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <ContentWrapper>
              <Text>{text}</Text>
              <Email to="/">{email}</Email>
              <LinkList>
                <RenderMapItems items={items} />
              </LinkList>
            </ContentWrapper>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  )
}
export default Footer
