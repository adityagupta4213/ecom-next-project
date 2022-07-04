import styles from "/styles/CatalogItem.module.scss";

export default function CatalogItem(props) {
  return (
    <div className={styles.container}>
      <img src={props.path} className={styles.image} />
    </div>
  );
}
