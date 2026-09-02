import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import * as styles from "../styles/layout.module.css";

const IndexPage = ({ data }) => {
    const posts = data.allMarkdownRemark.nodes;

    return (
        <Layout>
            <section className={styles.hero}>
                <p className={styles.heroLabel}>WELCOME TO</p>

                <h1>Web Blog</h1>

                <p>
                    Tempat berbagi tulisan tentang web development,
                    React.js, Gatsby.js, dan teknologi lainnya.
                </p>
            </section>

            <section>
                <div className={styles.sectionHeader}>
                    <h2>Artikel Terbaru</h2>

                    <p>
                        Beberapa artikel terbaru dari Web Blog.
                    </p>
                </div>

                <div className={styles.postGrid}>
                    {posts.map((post) => {
                        const { title, date, author, category, description, slug } =
                            post.frontmatter;

                        return (
                            <article key={post.id} className={styles.card}>
                                <div className={styles.cardCategory}>
                                    {category}
                                </div>

                                <h3>{title}</h3>

                                <p className={styles.date}>
                                    {date} · {author}
                                </p>

                                <p>{description}</p>

                                <Link
                                    to={slug}
                                    className={styles.readMore}
                                >
                                    Baca artikel →
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id

        frontmatter {
          title
          date(formatString: "DD MMMM YYYY")
          author
          category
          description
          slug
        }
      }
    }
  }
`;

export default IndexPage;