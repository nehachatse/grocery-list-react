import React from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export default function Grocery() {
  const [elemetList, setElemetList] = React.useState([]);

  const addItem = (newItem) => {
    const payload = {
      id: elemetList.length + 1,
      item: newItem
    };
    setElemetList([...elemetList, payload]);
  };
  const deleteItem = (id) => {
    const newArr = elemetList.filter((item) => item.id !== id);
    setElemetList(newArr);
  };
  return (
    <div>
      <GroceryInput addItem={addItem} />
      {elemetList.map((item, index) => (
        <GroceryList key={index} data={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
}
