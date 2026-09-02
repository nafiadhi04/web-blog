import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import * as styles from "../styles/layout.module.css";

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { title, date, author, category } = post.frontmatter;

  return (
    <Layout>
      <article className={styles.article}>
        <Link to="/" className={styles.backLink}>
          ← Kembali ke artikel
        </Link>

        <div className={styles.articleHeader}>
          <span className={styles.cardCategory}>
            {category}
          </span>

          <h1>{title}</h1>

          <p className={styles.date}>
            {date} · Ditulis oleh {author}
          </p>
        </div>

        <div
          className={styles.articleContent}
          dangerouslySetInnerHTML={{
            __html: post.html
          }}
        />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html

      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        author
        category
      }
    }
  }
`;

export default BlogPostTemplate;