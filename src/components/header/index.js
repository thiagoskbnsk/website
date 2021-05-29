import React from "react"

import { Container } from "../../utils/styled-components/components"
import { NavHeader, Navbar, BrandLink } from "./styled"

import graphism from "../../assets/images/graphism.svg"

const Header = props => (
  <NavHeader>
    <Navbar>
      <Container>
        <div>
          <BrandLink to="/">
            <img src={graphism} alt="Graphism" />
          </BrandLink>
        </div>
      </Container>
    </Navbar>
  </NavHeader>
)

export default Header
