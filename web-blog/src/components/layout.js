import React from "react";
import Navbar from "./navbar";
import * as styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <p>
                    © {new Date().getFullYear()} Web Blog. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Layout;