import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { XTerminal } from "../components/term";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#292828",
        }}
      >
        <XTerminal />
      </main>
    </div>
  );
};

export default Home;
