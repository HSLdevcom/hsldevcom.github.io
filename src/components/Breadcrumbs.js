import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../hooks/useSiteMetadata";

export default ({ breadcrumbs = [] }) => {
    const metadata = useSiteMetadata();
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: metadata.title,
          item: metadata.siteUrl
        },
        ...breadcrumbs.map((breadcrumb, index) => {
          return {
            "@type": "ListItem",
            position: index + 2,
            name: breadcrumb.title,
            item: metadata.siteUrl + breadcrumb.path
          };
        })
      ]
    };
  
    return (
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbList)}
        </script>
      </Helmet>
    );
}