import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";
import Socials from "../components/Socials";
import Heading from "../components/Heading";

export const getStaticProps = async () => {
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

const Home = ({ socials }) => {
   return (
      <div className={styles.wrapper}>
         <Head>
            <title>Home</title>
         </Head>
         <div>Hello it's for new font</div>
         <Heading text="NextJs application" />

         <Socials socials={socials} />
         <Navbar />
      </div>
   );
};

export default Home;
