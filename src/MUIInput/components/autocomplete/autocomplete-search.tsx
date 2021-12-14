import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const data = [
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

export const MUInput: React.FC = () => {

    const [options, setOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);

    useEffect(() => {
        setOptions(data);
    }, [])

    useEffect(() => {
        setFilteredOptions(options);
    }, [options])

    const [selectedItem, setSelectedItem] = useState(null);
    const [inputValue, setInputValue] = useState('');


    useEffect(() => {
        const currentOptions = options.filter(({ name }) => name.startsWith(inputValue.trim()));
        setFilteredOptions(currentOptions);
    }, [inputValue, options, selectedItem])

    const setNewItem = (e, newValue) => {
        setSelectedItem(newValue);
    }
    
  return (
    <form autoComplete="off">
    <Autocomplete
      id="selectItem"
      freeSolo
      value={selectedItem}
      onChange={setNewItem}
      onInputChange={(e, newInputValue) => {
          setInputValue(newInputValue);
      }}
      inputValue={inputValue}
      options={filteredOptions}
      getOptionLabel={(option) => ` ${option.name}`}
      style={{ width: 460 }}
      renderInput={params => (
          <TextField
            name="searchItem"
            variant="outlined"
            {...params}
            InputProps={{
                ...params.InputProps,
                className: '',
            }}
          />
      )}
    />
    </form>
  );
}
