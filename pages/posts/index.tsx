import { GetStaticProps } from "next";
import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import { postType } from "../../types";

/*
 * Застосовуємо SSG (Static Site Generator) підхід
 */
export const getStaticProps: GetStaticProps = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await response.json();

   if (!data) {
      return {
         notFound: true,
      };
   }

   return {
      props: { posts: data },
   };
};

type postTypeProps = {
   posts: [postType];
};

const Posts: FC<postTypeProps> = ({ posts }) => {
   return (
      <>
         <Head>
            <title>Posts</title>
         </Head>
         <Navbar />
         <Heading text="Posts list" />
         <ul>
            {posts.map(({ id, title }) => (
               <li key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
               </li>
            ))}
         </ul>
      </>
   );
};

export default Posts;
