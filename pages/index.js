import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Xinlu's home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
        <script
          data-goatcounter="https://xinlu.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </Head>
      <main className={styles.main}>
        <div className={styles.box}>
          <div>
            <p>
              <b>Oh hello - you found this page.</b>
            </p>
            <p>Not much to see here.</p>
            <p>Perhaps of interest:</p>
            <ul>
              <li>
                <a href="https://pct.xinlu.dev">My PCT journey 2022</a>
              </li>
              <li>
                <a href="https://roadtrip2020.xinlu.dev">Road trip 2020</a>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <div>
            © Xinlu Huang {new Date().getFullYear()}{" "}
            <a href="https://github.com/xinluh/">
              <i class="fa fa-github" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/xinluh">
              <i class="fa fa-linkedin-square" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
