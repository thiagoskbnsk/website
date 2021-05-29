import styled, { css } from "styled-components"
import defaultValues from "../../assets/styles/themes/default"
import PropTypes from "prop-types"

const fontStyle = props => css`
  font-weight: "bold";
  color: ${defaultValues.colors["secondary"]};
  font-family: ${defaultValues.font.primary};

  ${props => css`
    ${props.margin && `margin: ${props.margin}`};
    ${props.padding && `padding: ${props.padding}`};
  `}
`

export const H1 = styled.h1`
  ${props => fontStyle(props)}
  font-size: 3rem;
`

export const H2 = styled.h2`
  ${props => fontStyle(props)}
  font-size: 2.5rem;
`

export const H3 = styled.h3`
  ${props => fontStyle(props)}
  font-size: 2rem;
`

export const H4 = styled.h4`
  ${props => fontStyle(props)}
  font-size: 1.5rem;
`

export const H5 = styled.h5`
  ${props => fontStyle(props)}
  font-size: 1.25rem;
`

export const H6 = styled.h6`
  ${props => fontStyle(props)}
  font-size: 1rem;
`

export const P = styled.p.attrs(props => ({
  size: props.size || "1em",
  maxWidth: props.maxWidth || "100%",
  weight: props.weight || 400,
  color: defaultValues.colors[props.color || "default"],
  fontFamily: props.secondary
    ? defaultValues.font.secondary
    : defaultValues.font.primary,
  lineHeight: props.lineHeight || 1.5,
  textAlign: props.textAlign || "left",
  margin: props.margin,
  padding: props.padding,
}))`
  font-size: ${props => props.size};
  max-width: ${props => props.maxWidth};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};

  ${props => css`
    ${props.margin && `margin: ${props.margin}`};
    ${props.padding && `padding: ${props.padding}`};
  `}
`

P.propTypes = {
  secondary: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(defaultValues.colors)),
}
