import React from "react";
import styles from "./GroceryInput.module.css";

export const GroceryInput = ({ addItem }) => {
  const [value, setValue] = React.useState("");

  const submitItem = () => {
    setValue("");
    addItem(value);
  };

  return (
    <div className={styles.cont}>
      <input
        type="text"
        placeholder="Enter element"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={submitItem}>ADD</button>
    </div>
  );
};
