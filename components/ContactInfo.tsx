/*
export const getStaticProps = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
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
*/
import { FC } from "react";
import Heading from "./Heading";
import { contactType } from "../types";

type contactInfoProps = {
   contact: contactType;
};

const ContactInfo: FC<contactInfoProps> = (
   { contact } /* : ContactInfoP rops */
) => {
   const { name, email, address } = contact || {};
   const { street, suite, city, zipcode } = address || {};
   if (!contact) {
      return <Heading tag="h3" text="No Any Information" />;
   }
   return (
      <>
         <Heading text={name} />
         <div>
            <strong>Email:</strong>
            {email}
         </div>
         <div>
            <strong>Address:</strong>
            {`${street} ${suite} ${city} ${zipcode} `}
         </div>
      </>
   );
};

export default ContactInfo;
