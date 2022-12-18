import { FC } from "react";
import Heading from "../components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error: FC = () => {
   const router = useRouter();

   useEffect(() => {
      setTimeout(() => {
         router.push("/");
         console.log(router);
      }, 3000);
   });
   return (
      <div>
         <Head>
            <title>Error 404</title>
         </Head>
         <Heading text="Error 404" />
         <div> You will be return at homepage in 3 seconds </div>
      </div>
   );
};

export default Error;
