import Select from "react-select";

const SelectStatus = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <div className="col-2 m-auto mt-3 mb-3">
      <Select
        options={options}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
      />
    </div>
  );
};

export default SelectStatus;
