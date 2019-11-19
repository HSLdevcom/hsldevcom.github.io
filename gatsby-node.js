const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: getTemplateComponentForNode(node),
        context: {
          slug: node.fields.slug,
          breadcrumbs: findBreadcrumbs(node, result.data.allMarkdownRemark)
        }
      });
    });
  });
};

const getTemplateComponentForNode = node => {
    return path.resolve(`./src/templates/page.js`)
};

const findBreadcrumbs = (node, allMarkdownRemark) => {
  return allMarkdownRemark.edges.filter(({ node: otherNode }) => {
    return node.fields.slug.startsWith(otherNode.fields.slug) && node.fields.slug !== otherNode.fields.slug
  }).map(({ node }) => {
    return { path: node.fields.slug, title: node.frontmatter.title }
  }).sort((a, b) => a.path.length - b.path.length)
}