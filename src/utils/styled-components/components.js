import styled, { css, createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import defaultValues from "../../assets/styles/themes/default"
import { responsiveWidthColumns, media } from "./functions"

export const Container = styled.div`
  width: 100%;
  margin: auto;
  padding-left: ${defaultValues.config.columnGap}px;
  padding-right: ${defaultValues.config.columnGap}px;
  height: 100%;
  position: relative;
  max-width: 100%;

  ${props => css`
    ${props.margin && `margin: ${props.margin}`};
    ${props.padding && `padding: ${props.padding}`};
  `}

  ${Object.keys(defaultValues.screens).map((screen, index) => {
    const { container } = defaultValues.screens[screen]

    return media[screen]`
      max-width: ${container}px;
    `
  })}
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${defaultValues.config.columnGap}px;
  margin-right: -${defaultValues.config.columnGap}px;
  height: 100%;

  ${props => css`
    ${props.alignItems && `align-items: ${props.alignItems}`};
    ${props.margin && `margin: ${props.margin}`};
    ${props.padding && `padding: ${props.padding}`};
  `}
`

export const Col = styled.div`
  width: 100%;
  padding: 0 ${defaultValues.config.columnGap}px;
  box-sizing: border-box;
  display: flex;
  position: relative;
  text-align: ${props => props.textAlign || "left"};

  ${props => css`
    ${props.margin && `margin: ${props.margin}`};
    ${props.padding && `padding: ${props.padding}`};
    ${props.alignItems && `align-items: ${props.alignItems}`};
    ${props.direction && `flex-direction: ${props.direction}`};
    ${props.justify && `justify-content: ${props.justify}`};
    ${responsiveWidthColumns(props)}
  `}
`

Col.propTypes = {
  col: PropTypes.number,
}

export const BlockOverflowBody = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`
