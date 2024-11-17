import styles from "./Map.module.scss";

export default function Loader() {
  return (
    <div className={styles.mapLoading}>
      <p>Loading...</p>
    </div>
  );
}
