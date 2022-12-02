import React from "react";
import Select from "react-select";

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    height: "42px",
    width: "100%",
    border: "none",
    borderRadius: 0,
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    borderTop: "1px solid lightgrey",
    borderRight: "1px solid lightgrey",
    borderBottom: "1px solid lightgrey",
    outline: "none",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      backgroundColor: "#f4cb0d",
      color: "#000",
      borderRadius: 50,
      margin: "10px",
      padding: "7px 10px",
      display: "block",
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "#f4cb0d",
      color: "#000",
      borderRadius: 50,
      padding: "2px 5px",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "#000",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "#000",
    ":hover": {
      color: "#f24b4b",
    },
  }),
  valueContainer: () => ({
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexWrap: "no-wrap",
    padding: "2px 8px",
    position: "relative",
    overflow: "hidden",
    width: "460px",
  }),
  // container: () => ({
  //   width: "460px",
  // }),
};

export default function DropdownWithSelect(props) {
  const { optionsList } = props;
  return (
    <Select
      closeMenuOnSelect={false}
      // defaultValue={[colourOptions[0], colourOptions[1]]}
      isMulti
      options={optionsList}
      styles={colourStyles}
    />
  );
}
