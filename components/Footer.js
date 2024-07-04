// components/Footer.js
import React from 'react';
import styles from "./Footer.module.css" ;
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_logo}>
          <img src="/images/vishwamanavlogo.jpg" alt="Vishwa Manav" width={250} height={250} />
        </div>
        <div className={styles.footer_quick_links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">ई-पेपर</Link></li>
            <li><Link href="/">विश्‍व मानव TV</Link></li>
            <li><Link href="/">देश</Link></li>
            <li><Link href="/">विदेश</Link></li>
            <li><Link href="/">बिजनेस</Link></li>
            <li><Link href="/">खेल</Link></li>
          </ul>
        </div>
        <div className={styles.footer_punjab_kesari_group}>
          <h3>Vishwa Manav Group</h3>
          <ul>
            <li><Link href="/">Hind Samachar</Link></li>
            <li><Link href="/">Navodaya Times</Link></li>
            <li><Link href="/">Nari</Link></li>
            <li><Link href="/">Yum</Link></li>
            <li><Link href="/">Jugaad</Link></li>
            <li><Link href="/">Bollywood Tadka</Link></li>
            <li><Link href="/">Health +</Link></li>
          </ul>
        </div>
        <div className={styles.footer_contact}>
          <h3>For Advertisement Query</h3>
          <p>Vishwa Manav Head Office<br />
            Saharanpur<br />
            Address: Transpot Nagar, Arabi Madarsa<br />
            Sadak Dhoodhli Saharanpur<br />
            Ph: 9358994950, 9997784920 <br />
            Email: <a href="mailto:support@vishwamanav.com">support@vishwamanav.com</a></p>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>Copyright © 2023 VISHWAMANAV.COM All rights reserved.</p>
        <ul className={styles.footer_bottom_links}>
          <li><Link href="/">Contact Us</Link></li>
          <li><Link href="/">Feedback</Link></li>
          <li><Link href="/">Advertisement Rate</Link></li>
          <li><Link href="/">Mobile Website</Link></li>
          <li><Link href="/">Sitemap</Link></li>
          <li><Link href="/">Privacy Policy</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
