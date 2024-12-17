"use client";

import Image from "next/image"; // Use Next.js Image for optimization
import styles from "../../styles/Ingredients.module.css";

const Ingredients = () => {
  return (
    <section id="ingredients" className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <h2>Better Ingredients</h2>
          <p>
            Only the best when you choose products offered on our platform - high-quality
            ingredients for high quality products!
          </p>
        </div>

        {/* Grid for Cards */}
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <Image
              src="/images/img1.png"
              alt="Vitamin C"
              className={styles.cardImage}
              width={300}  // Specify width and height for optimization
              height={200}
              loading="lazy" // Lazy load images
            />
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <Image
              src="/images/img2.png"
              alt="Vitamin B3"
              className={styles.cardImage}
              width={300}
              height={200}
              loading="lazy"
            />
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <Image
              src="/images/img3.png"
              alt="Magnesium"
              className={styles.cardImage}
              width={300}
              height={200}
              loading="lazy"
            />
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <Image
              src="/images/img4.png"
              alt="Hyaluronic Acid"
              className={styles.cardImage}
              width={300}
              height={200}
              loading="lazy"
            />
          </div>

          {/* Card 5 */}
          <div className={styles.card}>
            <Image
              src="/images/img5.png"
              alt="Lactobacillus"
              className={styles.cardImage}
              width={300}
              height={200}
              loading="lazy"
            />
          </div>

          {/* Card 6 */}
          <div className={styles.card}>
            <Image
              src="/images/img1.png"
              alt="Vitamin C"
              className={styles.cardImage}
              width={300}
              height={200}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
