import { FC } from "react";

const Tag = (text) => {
   return (
      <>
         <div></div>
      </>
   );
};
const Heading = ({ tag, text }: { tag?: string; text: string }) => {
   return <Tag text={text || "h1"} />;
};
export default Heading;
