// components/Navbar.js
import React from 'react';
import styles from "./Navbar.module.css";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.topBar}>
        <div className={styles.appLinks}>
          <a href="https://play.google.com/store">Get it on Google Play</a>
          <a href="https://www.apple.com/app-store/">Download on the App Store</a>
        </div>
      </div>
      <div className={styles.brand}>
        <img src="/images/vishwamanavlogo.PNG" alt="Vishwa Manav" width={300} height={90} />
      </div>
      <div className={styles.navLinks}>
        <a href="#">होम</a>
        <a href="#">देश</a>
        <a href="#">विदेश</a>
        <a href="#">जनपद</a>
        <a href="#">मनोरंजन</a>
        <a href="#">खेल</a>
        <a href="#">बिजनेस</a>
        <a href="#">धर्म</a>
        <a href="#">विविध</a>
      </div>
    </div>
  );
};

export default Navbar;
