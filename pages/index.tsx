import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";
import Socials from "../components/Socials";
import Heading from "../components/Heading";
import { socialsType } from "../types";

export const getStaticProps: GetStaticProps = async () => {
   /*
    * Робимо
    */

   const response = await fetch(`${process.env.API_HOST}/socials/`);
   const data = await response.json();

   if (!data) {
      return {
         notFound: true,
      };
   }
   return {
      props: { socials: data },
   };
};

type socialsTypeProps = {
   socials: [socialsType];
};

const Home: FC<socialsTypeProps> = ({ socials }) => {
   return (
      <div className={styles.wrapper}>
         <Head>
            <title>Home</title>
         </Head>
         <div>Hello its for new font</div>
         <Heading text="NextJs application" />

         <Socials socials={socials} />
         <Navbar />
      </div>
   );
};

export default Home;
