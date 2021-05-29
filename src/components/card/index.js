import React from "react"

import {
  CardWrapper,
  Category,
  Title,
  Subtitle,
  Legend,
  Img,
  LegendText,
  CardsWrapper,
  Anchor
} from "./styled"

import If from '../../components/if'
import { Link } from '@material-ui/icons';

export const Cards = ({ children }) => {
  return (
    <CardsWrapper>
      {children}
    </CardsWrapper>
  )
}

const Card = ({ link, category, title, subtitle, legend: { img, text } }) => {
  return (
    <CardWrapper>
      <div>
        <Category>
          {category}
          <If condition={link}>
            <Anchor href={link} target="_blank">
              <Link />
            </Anchor>
          </If>
        </Category>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <Legend>
        <If condition={img}>
          <Img src={img} alt={text} />
        </If>
        <LegendText>{text}</LegendText>
      </Legend>
    </CardWrapper>
  )
}

export default Card
