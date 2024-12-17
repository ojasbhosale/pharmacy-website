"use client";

import Image from "next/image"; // Use Next.js Image component for optimized loading
import styles from "../../styles/NewsSection.module.css";

const NewsSection = () => {
  return (
    <section id="news" className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <h2>Latest News</h2>
        </div>

        {/* Grid Layout */}
        <div className={styles.newsGrid}>
          {/* News Items */}
          <div className={`${styles.newsItem} ${styles.large}`}>
            <Image
              src="/images/news/new1.jpg"
              alt="News 1"
              width={600}  // Specify width for optimization
              height={400}
              className={styles.newsImage}
              loading="lazy"  // Lazy load images
            />
            <span className={styles.badge}>20 APR</span>
            <p>The Covid-19 Epidemic In 2022 Is Back</p>
          </div>

          <div className={styles.newsItem}>
            <Image
              src="/images/news/news2.jpg"
              alt="News 2"
              width={600}
              height={400}
              className={styles.newsImage}
              loading="lazy"
            />
            <span className={styles.badge}>21 APR</span>
            <p>Hac hendrerit mus nons semper suspendisse</p>
          </div>

          <div className={styles.newsItem}>
            <Image
              src="/images/news/news3.jpg"
              alt="News 3"
              width={600}
              height={400}
              className={styles.newsImage}
              loading="lazy"
            />
            <span className={styles.badge}>18 MAR</span>
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
          </div>

          <div className={styles.newsItem}>
            <Image
              src="/images/news/news4.jpg"
              alt="News 4"
              width={600}
              height={400}
              className={styles.newsImage}
              loading="lazy"
            />
            <span className={styles.badge}>17 MAR</span>
            <p>Vestibulum non eros nulla bibendum orci</p>
          </div>

          <div className={`${styles.newsItem} ${styles.large}`}>
            <Image
              src="/images/news/news5.jpg"
              alt="News 5"
              width={600}
              height={400}
              className={styles.newsImage}
              loading="lazy"
            />
            <span className={styles.badge}>20 APR</span>
            <p>New Updates: Turmeric & Ginger Benefits</p>
          </div>

          <div className={styles.newsItem}>
            <Image
              src="/images/news/news6.jpg"
              alt="News 6"
              width={600}
              height={400}
              className={styles.newsImage}
              loading="lazy"
            />
            <span className={styles.badge}>10 APR</span>
            <p>Important Insights About Vitamin C</p>
          </div>

          <div className={styles.newsItem}>
            <Image
              src="/images/news/news7.jpg"
              alt="News 7"
              width={600}
              height={400}
              className={styles.newsImage}
              loading="lazy"
            />
            <span className={styles.badge}>09 APR</span>
            <p>Explore Hyaluronic Acid Effects</p>
          </div>

          <div className={styles.newsItem}>
            <Image
              src="/images/news/news8.jpg"
              alt="News 8"
              width={600}
              height={400}
              className={styles.newsImage}
              loading="lazy"
            />
            <span className={styles.badge}>08 APR</span>
            <p>Improvements in Lactobacillus Research</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
