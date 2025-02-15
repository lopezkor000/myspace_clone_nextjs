import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";
import { SignInButton, SignOutButton } from "@/components/buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function NavMenu() {
  const session = await getServerSession(authOptions);

  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image src={"/next.svg"} width={216} height={30} alt="NextSpace Logo" />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <SignInButton />
      </ul>
    </nav>
  );
}
