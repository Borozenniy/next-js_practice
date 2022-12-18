import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Contacts.module.scss";
import computer from "../../public/computer.png";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";

// import { useEffect, useState } from "react";

export const getStaticProps = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await response.json();

   if (!data) {
      return {
         notFound: true,
      };
   }
   return {
      props: { contacts: data },
   };
};

const Contacts = ({ contacts }) => {
   /* 
   * Замість рендеру на стороні користувача (CSR)
   * використовуємо статичний пропс для рендеру на боці серверу (SSR)
   * Це може допомогти індексації
 const [contacts, setContacts] = useState(null);
   useEffect(() => {
      console.log("useEffect");
      const fetchData = async () => {
         const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
         );
         const data = await response.json();
         setContacts(data);
      };
      fetchData();
   }, []);
  */
   return (
      <>
         <div>
            <Head>
               <title>Contacts</title>
            </Head>
            <Navbar />
            <Image src={computer} width={64} height={64} alt={"previev"} />
            <Heading text="Contacts List" />
            <ul className={styles.contacts}>
               {contacts &&
                  contacts.map(({ id, name }) => (
                     <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                     </li>
                  ))}
            </ul>
         </div>
      </>
   );
};

export default Contacts;
