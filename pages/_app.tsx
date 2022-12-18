import "../styles/globals.scss";
import Layout from "../components/Layout";

// підключаємо загальне значення Head

const MyApp = ({ Component, pageProps }) => {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
};

export default MyApp;
