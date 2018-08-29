const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }

  if (node.internal.type === "WorksJson") {
    const value = slugify(node.title);
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

const createMarkdownPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("./src/templates/post.jsx");
  const pageTemplate = path.resolve("./src/templates/page.jsx");

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
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
  `).then((result) => {
    if (result.errors) {
      throw new Error(result.errors);
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      const { slug } = post.node.fields;
      const template = slug.indexOf("posts") >= 0 ? postTemplate : pageTemplate;

      createPage({
        path: slug,
        component: template,
        context: {
          slug,
          previous,
          next,
        },
      });
    });
  });
};

const createWorkPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const workTemplate = path.resolve("./src/templates/work.jsx");

  return graphql(`
    {
      allWorksJson(sort: { fields: date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw new Error(result.errors);
    }

    const works = result.data.allWorksJson.edges;
    works.forEach((work) => {
      const { slug } = work.node.fields;
      createPage({
        path: slug,
        component: workTemplate,
        context: {
          slug,
        },
      });
    });
  });
};

exports.createPages = ({ graphql, actions }) =>
  Promise.resolve()
    .then(() => createMarkdownPages({ graphql, actions }))
    .then(() => createWorkPages({ graphql, actions }));
