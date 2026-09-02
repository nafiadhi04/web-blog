import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.logo}>
                    Web Blog
                </Link>

                <div className={styles.menu}>
                    <Link
                        to="/"
                        className={styles.link}
                        activeClassName={styles.active}
                    >
                        Home
                    </Link>

                    <Link
                        to="/about/"
                        className={styles.link}
                        activeClassName={styles.active}
                    >
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;