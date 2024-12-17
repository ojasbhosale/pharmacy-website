'use client'

import Image from 'next/image'
import styles from '../../styles/Footer.module.css'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <Phone className={styles.icon} />
            <div className={styles.contactInfo}>
              <h3>Phone Number</h3>
              <p>+974 3118 1843</p>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <Mail className={styles.icon} />
            <div className={styles.contactInfo}>
              <h3>Email Address</h3>
              <p>Elbrithcqhr@gmail.com</p>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <MapPin className={styles.icon} />
            <div className={styles.contactInfo}>
              <h3>Office Location</h3>
              <p>Ambassador Street, Zone 61,</p>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.logoContainer}>
            {/* Lazy Loading Logo Image */}
            <Image 
              src="/images/logo2.png" 
              alt="Elbrit Life Sciences Logo" 
              width={250}
              height={80}
              className={styles.logo}
              loading="lazy"  // Lazy load the image
            />
          </div>
          
          <p className={styles.description}>
            Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
          </p>
        </div>

        <div className={styles.address}>
          <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </div>
      </div>
    </footer>
  )
}
