import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";

import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";

import styles from "../styles/Home.module.css";

gsap.registerPlugin(SplitText);

export default function Home() {
  const [openCart, setOpenCart] = useState(false);

  const textRef = useRef(null);
  const imageRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {

    gsap.set(textRef.current, { visibility: "visible" });

    const tl = new gsap.timeline({
      defaults: { duration: 2, ease: "power4.in" },
    });
    const text = new SplitText(textRef.current, { type: "words, chars" });
    const image = imageRef.current.children[0].children[1];

    tl.from(maskRef.current, {
      width: "100%",
    })
      .from(
        image,
        {
          scale: 1.5,
        },
        "-=2"
      )
      .from(
        text.chars,
        {
          y: 110,
          skewX: 20,
          stagger: 0.01,
          autoAlpha: 0,
          transformOrigin: "50% 50%",
        },
        "-=1.5"
      );
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setOpen={() => setOpenCart(!openCart)} open={openCart} />
      {openCart && (
        <Cart setOpen={() => setOpenCart(!openCart)} open={openCart} />
      )}
      <main className={styles.main}>
        <h1 className={styles.title} ref={textRef}>
          <span className={styles.logo}>Brand.</span> is an immersive cart
          experience.
        </h1>
        <div className={styles.image} ref={imageRef}>
          <Image
            src="/charlie-deets-SjaXRukdaEM-unsplash.jpg"
            alt="man with shopping cart"
            width={640}
            height={418}
            ref={imageRef}
          />
          <div className={styles.imageMask} ref={maskRef}></div>
        </div>
      </main>
    </div>
  );
}

// Photo by <a href="https://unsplash.com/@charliedeets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Charlie Deets</a> on <a href="https://unsplash.com/s/photos/shopping-cart?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
