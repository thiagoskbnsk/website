import React from "react"

import Carousel from "../../components/carousel"
import Card, { Cards } from "../../components/card"

const Experiences = ({ items, ...rest }) => {
  const RenderCards = ({ items }) => {
    return items.map(currentItem => (
      <Card {...currentItem} key={currentItem.title} />
    ))
  }

  return (
    <Carousel {...rest}>
      <Cards>
        <RenderCards items={items} />
      </Cards>
    </Carousel>
  )
}

export default Experiences
