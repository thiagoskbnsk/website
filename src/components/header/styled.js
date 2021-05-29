import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../../utils/styled-components/functions"

export const NavHeader = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;

  ${media.tablet`
    height: 130px;
  `}
`

export const Navbar = styled.nav`
  width: 100%;
`

export const BrandLink = styled(Link)`
  text-decoration: none;
`
