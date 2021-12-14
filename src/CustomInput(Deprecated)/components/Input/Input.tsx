import React, { SyntheticEvent, useEffect } from "react";
import { DataType } from "../../types/data";

interface PropTypes {
    options: DataType[];
    setDisplayedOptions: (param: DataType[]) => void;
    inputSearchValue: string;
    setFocusOn: () => void;
    setInputSearchValue: (param: string) => void;
}

let timer;

export const Input: React.FC<PropTypes> = ({
    options,
    setDisplayedOptions,
    inputSearchValue,
    setInputSearchValue,
    setFocusOn
}) => {
    const handleChange = (event: SyntheticEvent) => {
        setInputSearchValue((event.target as HTMLInputElement).value)
    };

    const setChangedValue = () => {
        const currentOptions = options.filter(({ name }) => name.startsWith(inputSearchValue));
        setDisplayedOptions(currentOptions);
    };

    useEffect(() => {
        timer = setTimeout(() => {
            setChangedValue();
        }, 500)
    }, [inputSearchValue, options])

  return (
    <input 
        value={inputSearchValue} 
        onChange={handleChange} 
        onFocus={setFocusOn} 
    />
  );
}
