import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [openCart, setOpenCart] = useState(false);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setOpen={() => setOpenCart(!openCart)} open={openCart} />
      {openCart && <Cart setOpen={() => setOpenCart(!openCart)} open={openCart} />}
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.logo}>Brand.</span> is an immersive cart
          experience.
        </h1>
      </main>
    </div>
  );
}
