import Heading from "../../components/Heading";
import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import Navbar from "../../components/Navbar";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { postType } from "../../types";

type postTypeProps = {
   post: postType;
};

/*
 * Застосовуємо SSG (Static Site Generator) підхід
 */
export const getStaticPaths: GetStaticPaths = async () => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
   const data = await response.json();
   const paths = data.map(({ id }) => ({ params: { id: id.toString() } }));
   //console.log(paths);
   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps = async (context) => {
   const { id } = context.params;
   const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
   );
   const data = await response.json();

   if (!data) {
      return {
         notFound: true,
      };
   }
   return {
      props: { post: data },
   };
};

const Post: FC<postTypeProps> = ({ post }) => {
   return (
      <>
         <div>
            <Head>
               <title>Contact</title>
            </Head>
            <Navbar />
            <PostInfo post={post} />
         </div>
      </>
   );
};

export default Post;
