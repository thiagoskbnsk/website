import React from "react"

import { CtaAnchor } from "./styled"

const Anchor = ({ children, ...rest }) => (
  <CtaAnchor {...rest}>{children}</CtaAnchor>
)

export default Anchor
