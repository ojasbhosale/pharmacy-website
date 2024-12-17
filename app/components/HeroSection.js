"use client";

import { FiPackage, FiTarget, FiCoffee } from "react-icons/fi";
import Image from "next/image";
import styles from "../../styles/HeroSection.module.css";

export default function HeroSection() {
  const features = [
    {
      icon: <FiPackage size={50} />,
      title: "Vitamins",
      description: "Increased Vitamins and minerals in your diet",
    },
    {
      icon: <FiTarget size={50} />,
      title: "Weight Loss",
      description: "Find scientifically proven solutions",
    },
    {
      icon: <FiCoffee size={50} />,
      title: "Functional Foods",
      description: "From protein powders to baby formula",
    },
  ];

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heading}>
        <h1>Essential Vitamins</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.heroSectionleft}>
          <p className={styles.heroleftsubtitle}>Online Medical Supplies</p>
          <h1 className={styles.heroleftTitle}>
            Get Your Vitamins <br /> & Minerals
          </h1>
          <button className={styles.exploreButton}>Explore</button>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/hero-section.png"
            alt="hero-section"
            width={600} // You can adjust width/height as needed
            height={400}
            loading="lazy" // Lazy load the image
            className={styles.heroImage}
          />
        </div>
        <div className={styles.container}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <div className={styles.text}>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
