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
    const slug = createFilePath({ node, getNode });
    const type = slug.includes("posts") ? "post" : "page";
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
    createNodeField({
      node,
      name: "type",
      value: type,
    });
  }

  if (node.internal.type === "WorksJson") {
    const slug = slugify(node.title);
    createNodeField({
      node,
      name: "slug",
      value: slug,
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
              type
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

    const createPageHelper = ({ node }, index, array) => {
      const previous =
        index === array.length - 1 ? null : array[index + 1].node;
      const next = index === 0 ? null : array[index - 1].node;
      const { slug, type } = node.fields;
      createPage({
        path: slug,
        component: type === "post" ? postTemplate : pageTemplate,
        context: {
          slug,
          previous,
          next,
        },
      });
    };
    const { edges } = result.data.allMarkdownRemark;
    const posts = edges.filter(({ node }) => node.fields.type === "post");
    const pages = edges.filter(({ node }) => node.fields.type === "page");
    posts.forEach(createPageHelper);
    pages.forEach(createPageHelper);
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
