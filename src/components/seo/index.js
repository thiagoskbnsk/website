import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = pageData => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const title = pageData.title || seo.title
      const description = pageData.description || seo.description
      const url = `${seo.siteUrl}${pageData.pathname || "/"}`
      const script = pageData.script
      const robots = pageData.robots || "index, follow"

      return (
        <React.Fragment>
          <Helmet script={script}>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={robots} />
            <meta name="keywords" content={pageData.keywords} />
            <meta name="author" content={pageData.author} />

            <link rel="canonical" href={url} />

            <link rel="preconnect" href="https://www.google.com" crossorigin />
            <link
              rel="preconnect"
              href="https://fonts.googleapis.com/"
              crossorigin
            />
            <link
              rel="preconnect"
              href="https://www.google-analytics.com"
              crossorigin
            />

            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              rel="preconnect"
              href="https://ajax.googleapis.com"
              crossorigin
            />
            <link
              rel="preconnect"
              href="https://www.google-analytics.com"
              crossorigin
            />

            <script>
              {`
                WebFontConfig = {
                  google: { families: ['Source+Sans+Pro:400,600,700&display=swap'] }
                };

                (function(d) {
                  var wf = d.createElement('script'), s = d.scripts[0];
                  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
                  wf.async = true;
                  s.parentNode.insertBefore(wf, s);
                })(document);
              `}
            </script>

            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={seo.author} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
          </Helmet>
        </React.Fragment>
      )
    }}
  />
)

SEO.defaultProps = {
  meta: [],
  keywords: [],
  script: [],
}

export default SEO
