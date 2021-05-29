import { css } from "styled-components"
import defaultValues from "../../assets/styles/themes/default"

export const media = Object.keys(defaultValues.screens).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${defaultValues.screens[label].size}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export const only = Object.keys(defaultValues.screens).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${defaultValues.screens[label].size - 1}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export const responsiveWidthColumns = ({
  col,
  phone,
  tablet,
  medium,
  desktop,
  fullhd,
}) => {
  const sizes = {
    col,
    phone,
    tablet,
    medium,
    desktop,
    fullhd,
  }

  return Object.keys(sizes).reduce((acc, label) => {
    const numberOfColumns = sizes[label]

    if (numberOfColumns) {
      const cssProperties = css`
        max-width: ${(100 / defaultValues.config.columns) * numberOfColumns}%;
      `

      return [
        ...acc,
        media[label] ? media[label]`${cssProperties}` : cssProperties,
      ]
    }

    return acc
  }, [])
}
