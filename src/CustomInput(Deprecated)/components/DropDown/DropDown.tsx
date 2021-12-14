import React, { useCallback } from "react";
import { DataType } from "../../types/data";
import { DropDownItem } from "./DropwDownItem/DropDownItem";

interface PropTypes {
  focus: boolean;
  setFocusOff: () => void;
  displayedOptions: DataType[];
  setInputSearchValue: (param: string) => void;
}

export const DropDown: React.FC<PropTypes> = ({ 
  focus, 
  displayedOptions, 
  setInputSearchValue,
  setFocusOff,
}) => {
  const checkNumberOfOptions = displayedOptions.length

  const selectInputValue = useCallback((nameValue) => {
    setInputSearchValue(nameValue)
    setFocusOff();
  }, [])
  
  return (
    focus && (
      <ul>
        {
          checkNumberOfOptions ? displayedOptions.map(({ id, name }) => 
          <DropDownItem 
              key={id} 
              name={name}
              selectInputValue={selectInputValue}
              />)
           : 'There are no options'
        }
      </ul>
    )
  );
}
