import React, { useEffect, useState } from "react";
import { useFocus } from "../hooks/useFocus";
import { DataType } from "../types/data";
import { DropDown } from "./DropDown/DropDown";
import { Input } from "./Input/Input";

const data: DataType[] = [
    {id: "1", name: "React"},
    {id: "2", name: "Angular"},
    {id: "3", name: "Vue"},
    {id: "4", name: "JavaScript"},
    {id: "5", name: "TypeScript"},
    {id: "6", name: "Docker"},
    {id: "7", name: "Electron"},
    {id: "8", name: "ReactNative"},
    {id: "9", name: "Kotlin"},
    {id: "10", name: "Swift"},
  ]

export const CustomInput: React.FC = () => {
    const [options, setOptions] = useState<DataType[]>([]);
    const [displayedOptions, setDisplayedOptions] = useState<DataType[]>([]);
    const [inputSearchValue, setInputSearchValue] = useState('');

    useEffect(() => {
        setOptions(data);
    }, [])

    const {
        focus,
        setFocusOn,
        setFocusOff,
    } = useFocus();

  return (
    <>
        <Input
            options={options}
            setDisplayedOptions={setDisplayedOptions}
            inputSearchValue={inputSearchValue}
            setInputSearchValue={setInputSearchValue}
            setFocusOn={setFocusOn}
        />
        <DropDown 
            focus={focus}
            setFocusOff={setFocusOff}
            displayedOptions={displayedOptions}
            setInputSearchValue={setInputSearchValue}
        />
    </>
  );
}
