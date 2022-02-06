import styles from "./GroceryList.module.css";

export const GroceryList = ({ data, deleteItem }) => {
  return (
    <div className={styles.list}>
      <div className={styles.headl}>
        <h3>{data.item}</h3>
      </div>
      <div className={styles.btn}>
        <button onClick={() => deleteItem(data.id)}>X</button>
      </div>
    </div>
  );
};
