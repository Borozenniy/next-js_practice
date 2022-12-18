import "../styles/globals.scss";
import Layout from "../components/Layout";
import { AppProps } from "next/app";

// підключаємо загальне значення Head

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
};

export default MyApp;
