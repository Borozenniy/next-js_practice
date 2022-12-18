import Heading from "../../components/Heading";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import Navbar from "../../components/Navbar";

export const getServerSideProps = async (context) => {
   const { id } = context.params;
   const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
   );
   const data = await response.json();

   if (!data) {
      return {
         notFound: true,
      };
   }
   return {
      props: { contact: data },
   };
};
const Contact = ({ contact }) => {
   //console.log(contact);
   return (
      <>
         <div>
            <Head>
               <title>Contact</title>
            </Head>
            <Navbar />
            <ContactInfo contact={contact} />
         </div>
      </>
   );
};

export default Contact;
