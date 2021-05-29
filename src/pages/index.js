import React from "react"

import Template from "../components/template"
import Seo from "../components/seo"
import Header from "../components/header"
import Hero from "../containers/hero"
import Footer from "../components/footer"
import Experiences from "../containers/experiences"

import data from "../constants/data"

import githubImg from "../assets/images/github.svg"
import { getRepositories } from "../services/api/github"
import { ellipsisText } from "../utils"

const IndexPage = props => {
  const { seo, hero, footer, experiences } = data
  const [repositories, setRepositories] = React.useState([])

  React.useEffect(() => {
    getRepositoriesFromGithub()
  }, [])

  const getRepositoriesFromGithub = async () => {
    const response = await getRepositories("thiagoskbnsk")
    const data = await response.json()

    const values = data.map(({ language, name, html_url, description }) => ({
      link: html_url,
      category: language != null ? language : "Technology",
      title: ellipsisText(name, 25),
      subtitle: ellipsisText(description, 80),
      legend: { img: githubImg, text: "GitHub" },
    }))

    setRepositories(values)
  }

  React.useEffect(() => {
    console.log(repositories)
  }, [repositories])

  return (
    <Template>
      <Seo {...seo} pathname={props.location.pathname} />
      <Header />
      <Hero {...hero} />
      <Experiences title="Projects" items={repositories} />
      <Experiences title="Work" items={experiences} />
      <Footer data={footer} />
    </Template>
  )
}

export default IndexPage
