"use client";
import { useState, useCallback } from "react";
import styles from "../../styles/Navbar.module.css";
import { FiHome, FiInfo, FiPhone, FiMenu, FiX } from "react-icons/fi";
import { SiSpeedypage } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosMedical } from "react-icons/io";
import { IoMdHome } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const navLinks = [
    { href: "#hero", icon: <IoMdHome />, label: "Home" },
    { href: "#features", icon: <SiSpeedypage />, label: "Features" },
    { href: "#ingredients", icon: <IoIosMedical />, label: "Ingredients" },
    { href: "#news", icon: <IoNewspaperOutline />, label: "News" },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ""}`}>
        {navLinks.map(({ href, icon, label }) => (
          <li key={label}>
            <a href={href} onClick={() => setIsMenuOpen(false)}>
              {icon} {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
