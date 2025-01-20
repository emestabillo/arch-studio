import styles from "./FixedPageTitle.module.scss";

export default function PageTitle({ title }: { title: string }) {
  return (
    <small className={styles.title} aria-hidden="true">
      {title}
    </small>
  );
}
