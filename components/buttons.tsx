"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/buttons.module.css";

export function SignInButton() {
  const { data: session, status } = useSession();
  // console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <li>
        <div className={styles.signIn}>
          <Link href={"/dashboard"}>
            <Image
              src={session.user?.image ?? "/globe.svg"}
              width={32}
              height={32}
              alt="Your Name"
              className={styles.signIn}
            />
          </Link>
        </div>
        <div className={styles.signIn}>
          <SignOutButton />
        </div>
      </li>
    );
  }

  return (
    <li>
      <button onClick={() => signIn()}>Sign In</button>
    </li>
  );
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}
