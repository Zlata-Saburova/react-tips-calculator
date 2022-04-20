import Select, { SingleValue } from "react-select";
import { IOption } from "../../types/index";

const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

interface ISelect {
  onChange: (newValue: SingleValue<IOption>) => void;
}

export const CustomSelect = ({ onChange }: ISelect) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      styles={customStyles}
      defaultValue={{ value: 10, label: "10%" }}
    />
  );
};

const customStyles: {} = {
  option: (provided: {}, state: { isSelected: boolean }) => ({
    ...provided,
    borderRadius: "30px",
    backgroundColor: state.isSelected ? "#2ED2C9" : "#fff",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#80ded9ad",
    },
  }),

  control: (provided: {}) => ({
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

  singleValue: (provided: {}) => ({
    ...provided,
    textAlign: "center",
  }),

  placeholder: (provided: {}) => ({
    ...provided,
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "26px",
    color: "rgba(117, 108, 108, 0.6)",
  }),

  indicatorSeparator: (provided: {}) => ({
    ...provided,
    display: "none",
  }),
};
