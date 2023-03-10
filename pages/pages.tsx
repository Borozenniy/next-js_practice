import { FC } from "react";
import Heading from "../components/Heading";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Page: FC = () => {
   return (
      <>
         <div>
            <Head>
               <title>Pages</title>
            </Head>
            <Navbar />

            <Heading text="Pages" />
         </div>
      </>
   );
};

export default Page;
