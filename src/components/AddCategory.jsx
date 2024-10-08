import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("Boku no Heroe");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit =(event) => {
    event.preventDefault();
    if (inputValue.trim().length<=1)return;
    // addCategory(categories => [inputValue, ...categories])
    onNewCategory(inputValue.trim())
    setInputValue('')
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
