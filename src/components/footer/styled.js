import styled from "styled-components"
import { P } from "../../utils/styled-components/typography"
import { Link } from "gatsby"

export const FooterWrapper = styled.section`
  background: ${props => props.theme.colors.dark};
  margin-top: 86px;
  padding: 56px 0;
`
export const Text = styled(P)`
  font-weight: 600;
  letter-spacing: 2.4px;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Email = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  text-decoration: underline;
  margin-bottom: 32px;
`

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
`

export const ItemList = styled.li`
  padding: 0 8px;
`

export const ItemLink = styled.a``

export const ImgItem = styled.img`
  min-width: 100%;
`

export const ContentWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
