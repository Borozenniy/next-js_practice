import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const navigation = [
   { id: 1, title: "Home", path: "/" },
   { id: 2, title: "Posts", path: "/posts" },
   { id: 3, title: "Contacts", path: "/contacts" },
];
const Navbar = () => {
   const { pathname } = useRouter();
   return (
      <>
         <nav className={styles.nav}>
            <div className={styles.logo}>Logo must be here</div>
            <div className={styles.links}>
               {navigation.map(({ id, title, path }) => (
                  <Link
                     key={id}
                     href={path}
                     className={pathname === path ? styles.active : null}
                  >
                     {title}
                  </Link>
               ))}
               {/* Заменяем на массив navigation
               <Link href="/">Home</Link>
               <Link href="/pages">Pages</Link>
               <Link href="/contacts">Contacts</Link>
               */}
            </div>
         </nav>
      </>
   );
};

export default Navbar;
