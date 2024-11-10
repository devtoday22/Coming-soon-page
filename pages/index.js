import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/pages/Style.module.css";




export default function Home() {
  return (
    <>
      <Head>
        <title>Coming soon page</title>
        <meta name="description" content="Coming soon page app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.leftCol}>
              <div className={styles.design}>
            <div className={styles.logo}>
               <Image
                src="/logo.svg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
              </div>
              <div className={styles.imageMobile}>
               <Image
                src="/hero-desktop.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
              </div>
              <h1 className={styles.leftHeadline}><span className={styles.about}>WE'RE</span> COMING SOON</h1>
             <p className={styles.description}>Hello follow shoppers! We're currently building our news fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
             <div className={styles.inputContainer}>
      <input type="text" placeholder="Email Address" className={styles.inputField} />
      <button className={styles.inputButton}>&gt;</button>
    </div>
             </div>
              
            </div>
            <div className={styles.rightCol}>
              <div className={styles.image}>
               <Image
                src="/hero-desktop.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
              </div>
            </div>

          </div>
        </section>
      </main>

    </>
  );
}
