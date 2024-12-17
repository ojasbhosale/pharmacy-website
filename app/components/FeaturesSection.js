"use client";

import dynamic from "next/dynamic"; // Dynamically import components to improve page speed
import styles from "../../styles/FeaturesSection.module.css";

// Dynamically import icons for performance optimization
const FiCheckCircle = dynamic(() => import("react-icons/fi").then((mod) => mod.FiCheckCircle), { ssr: false });
const FiFeather = dynamic(() => import("react-icons/fi").then((mod) => mod.FiFeather), { ssr: false });
const FiMapPin = dynamic(() => import("react-icons/fi").then((mod) => mod.FiMapPin), { ssr: false });
const FiBox = dynamic(() => import("react-icons/fi").then((mod) => mod.FiBox), { ssr: false });
const FiTruck = dynamic(() => import("react-icons/fi").then((mod) => mod.FiTruck), { ssr: false });
const FiRefreshCcw = dynamic(() => import("react-icons/fi").then((mod) => mod.FiRefreshCcw), { ssr: false });

export default function FeaturesSection() {
  const features = [
    {
      icon: <FiCheckCircle size={50} />,
      title: "Clinically Studied",
      description: "All products that we offer have undergone lab and safety tests",
    },
    {
      icon: <FiFeather size={50} />,
      title: "Vegetarian Friendly",
      description: "We have a wide selection of vegetarian products to meet your needs",
    },
    {
      icon: <FiMapPin size={50} />,
      title: "Made In India",
      description: "Shop local and explore health products made right here in India",
    },
    {
      icon: <FiTruck size={50} />,
      title: "Free Shipping",
      description: "We deliver to your door with no shipping costs on your orders",
    },
    {
      icon: <FiBox size={50} />,
      title: "No Risk",
      description: "We ensure that all products are safe and within their use-by date",
    },
    {
      icon: <FiRefreshCcw size={50} />,
      title: "GMO Free",
      description: "Natural, no modified products and derivatives for those who need it",
    },
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.featureContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
