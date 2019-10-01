import React from "react";
import { withPrefix } from "gatsby"; 
import { Helmet } from "react-helmet";

import useSiteMetadata from "../hooks/useSiteMetadata";

export default ({ pageTitle, pageDescription, pagePath }) => {
  const metadata = useSiteMetadata();

  const title = pageTitle ? `${pageTitle} | ${metadata.title}` : metadata.title;

  const canonicalUrl = pagePath && metadata.siteUrl + pagePath;

  const description = pageDescription || metadata.description;

  const shareImageUrl = metadata.siteUrl + metadata.shareImage;

  const language = "en";

  return (
    <Helmet>
      <html lang={language} prefix="og: http://ogp.me/ns#" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle || metadata.title} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" description={language} />
      <meta property="og:image" content={shareImageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImageUrl} />
      <title>{title}</title>
      <meta name="description" content={description} />
      { !!canonicalUrl && <link rel="canonical" href={canonicalUrl} /> }
      <link rel="icon" type="image/x-icon" href={withPrefix('/favicon.ico')} />
    </Helmet>
  );
};