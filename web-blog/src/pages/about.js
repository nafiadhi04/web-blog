import React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/layout.module.css";

const AboutPage = () => {
    return (
        <Layout>
            <section className={styles.page}>
                <p className={styles.heroLabel}>ABOUT</p>

                <h1>Tentang Web Blog</h1>

                <p>
                    Web Blog adalah sebuah mini blog yang dibuat menggunakan
                    Gatsby.js dan React.js.
                </p>

                <p>
                    Artikel pada website ini ditulis menggunakan file Markdown
                    sehingga konten dapat dipisahkan dari kode aplikasi.
                </p>

                <h2>Teknologi</h2>

                <ul>
                    <li>Gatsby.js</li>
                    <li>React.js</li>
                    <li>GraphQL</li>
                    <li>Markdown</li>
                    <li>gatsby-source-filesystem</li>
                    <li>gatsby-transformer-remark</li>
                    <li>CSS Modules</li>
                </ul>
            </section>
        </Layout>
    );
};

export default AboutPage;