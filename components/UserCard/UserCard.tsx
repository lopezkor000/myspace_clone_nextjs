import Link from "next/link";
import styles from "./UserCard.module.css";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className={styles.card}>
      <img
        src={image ?? "/next.svg"}
        alt={`${name}'s profile`}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
          <p>Age: {age}</p>
        </h3>
      </div>
    </div>
  );
}
