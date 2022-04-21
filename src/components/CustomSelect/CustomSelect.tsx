import Select, { StylesConfig } from "react-select";
import { IOption } from "../../types/index";

const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

interface ISelect {
  handleSelect: (option: IOption | null) => void;
  value: IOption;
}

export const CustomSelect = ({ handleSelect, value }: ISelect) => {
  const customStyles: StylesConfig<IOption> = {
    option: (provided, state) => ({
      ...provided,
      borderRadius: "30px",
      backgroundColor: state.isSelected ? "#2ED2C9" : "#fff",
      cursor: "pointer",
    }),

    control: (provided) => ({
      ...provided,
      borderRadius: "30px",
      paddingTop: "15px",
      paddingBottom: "15px",
      paddingLeft: "10px",
      border: "none",
      maxWidth: "456px",
      width: "100%",

      cursor: "pointer",
    }),

    singleValue: (provided) => ({
      ...provided,
      textAlign: "center",
    }),

    placeholder: (provided) => ({
      ...provided,
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "26px",
      color: "rgba(117, 108, 108, 0.6)",
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };

  return (
    <Select
      options={options}
      onChange={handleSelect}
      styles={customStyles}
      value={value}
      defaultValue={{ value: 10, label: "10%" }}
      isMulti={false}
    />
  );
};
