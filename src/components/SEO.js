import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        author
        siteDesc: description
        siteUrl: url
        image
        twitterUsername
      }
    }
  }
`;

const SEO = () => {
  const { site } = useStaticQuery(query);
  const {
    siteTitle,
    author,
    siteDesc,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata;
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${siteTitle} | ${siteDesc}`}
    >
      <meta name="description" content={siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
