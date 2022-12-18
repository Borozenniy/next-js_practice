import Heading from "./Heading";

const ContactInfo = ({ post }) => {
   const { title, body } = post || {};

   if (!post) {
      return <Heading tag="h3" text="No any information about post" />;
   }
   return (
      <>
         <Heading text="Post" />
         <div>
            <strong>Title</strong>
            {title}
         </div>
         <div>
            <strong>Text:</strong>
            {body}
         </div>
      </>
   );
};

export default ContactInfo;
