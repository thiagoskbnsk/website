import styled from "styled-components"
import { H2, P } from "../../utils/styled-components/typography"

export const CardWrapper = styled.div`
  max-width: 335px;
  min-width: 335px;
  padding: 24px;
  background: ${props => props.theme.colors.dark};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Category = styled.span`
  font-size: 0.8125rem;
  letter-spacing: 1.95px;
  color: ${props => props.theme.colors.white};
  display: block;
  text-transform: uppercase;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled(H2)`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 8px;
`

export const Subtitle = styled(P)`
  font-size: 0.8125rem;
  color: ${props => props.theme.colors.default};
  margin-bottom: 8px;
`

export const Legend = styled.div`
  display: flex;
`

export const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`

export const LegendText = styled.span`
  font-size: 0.8125rem;
  color: ${props => props.theme.colors.default};
  line-height: 1.5;
`

export const CardsWrapper = styled.div`
  display: flex;
  position: relative;
  transition: all 200ms ease-in-out;

  ${CardWrapper} {
    margin-right: 16px;
  }
`

export const Anchor = styled.a`
  display: inline-block;
  font-size: 22px;
  color: #c1c1c1;
  height: 22px;

  &:hover {
    color: #fff;
  }
`