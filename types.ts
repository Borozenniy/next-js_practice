export type contactType = {
   name: string;
   email: string;
   address: addressType;
   id: string;
};

export type addressType = {
   street: string;
   suite: string;
   city: string;
   zipcode: string;
};

export type postType = {
   id: string;
   title: string;
   body: string;
};

export type socialsType = {
   id: string;
   icon: string;
   path: string;
};
