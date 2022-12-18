import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";

/*
 * Застосовуємо SSG (Static Site Generator) підхід
 */
export const getStaticProps = async () => {
   try {
      const response = await fetch(
         "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      if (!data) {
         return {
            notFound: true,
         };
      }
   } catch {
      return {
         props: { posts: data },
      };
   }
};
const Posts = ({ posts }) => {
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
