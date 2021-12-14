import React from "react";

interface PropType {
 name: string;
 selectInputValue: (param: string) => void;
}

export const DropDownItem: React.FC<PropType> = ({ name, selectInputValue }) => {
  const setItem = () => {
    selectInputValue(name);
  }
  return (
    <li onClick={setItem}>{name}</li>
  );
}
