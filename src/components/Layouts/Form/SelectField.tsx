import { useState, useEffect } from "react";

import * as Styled from "./form.styled";
import { Spinner } from "@/components/Layouts";
import { ArrowTriangleIcon, CloseIcon } from "@/components/Layouts/Icons";

type OptionT = {
  title: string;
  value: string;
};

type SelectFieldT = {
  value: OptionT;
  loading?: boolean;
  placeholder?: string;
  isFilterable?: boolean;
  options: Array<OptionT>;
  onSelect: (value: OptionT) => void;
  label?: string;
  onCleanUpField?: () => void;
};

const SelectField: React.FC<SelectFieldT> = ({
  value,
  label,
  options,
  onSelect,
  placeholder,
  loading = false,
  isFilterable = true,
  onCleanUpField,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [enteredValue, setEnteredValue] = useState(value.value || "");

  const onOpenDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(true);
  };

  const onCloseDropdown = () => setOpenDropdown(false);

  const onSelectItem = (value: OptionT) => {
    onSelect(value);
    setEnteredValue(value.title);
    setOpenDropdown(false);
  };

  const onClean = (e: React.MouseEvent) => {
    e.preventDefault();
    setEnteredValue("");
    onCleanUpField && onCleanUpField();
  };

  useEffect(() => {
    if (!value.value && enteredValue) setEnteredValue("");
    else if (value.value && !enteredValue) setEnteredValue(value.title);
  }, [value.value]);

  return (
    <Styled.SelectField className={openDropdown ? "active" : ""}>
      {label && <label htmlFor="">{label}</label>}

      <div className="dropdown-wrapper">
        <div className="text-field__wrapper">
          <input
            type="text"
            placeholder={placeholder || "select"}
            className="text-field__input"
            value={enteredValue}
            onChange={(e) => setEnteredValue(e.target.value)}
            onClick={onOpenDropdown}
          />

          {openDropdown && enteredValue ? (
            <button onClick={onClean}>
              <CloseIcon />
            </button>
          ) : (
            <button onClick={onOpenDropdown}>
              <ArrowTriangleIcon />
            </button>
          )}
        </div>

        {openDropdown && (
          <>
            <div className="dropdown-backdrop" onClick={onCloseDropdown} />
            <div className="dropdown-window">
              <ul className="dropdown-window__list">
                {loading ? (
                  <Spinner />
                ) : (
                  <Options
                    options={options}
                    enteredValue={enteredValue}
                    onSelectItem={onSelectItem}
                    isFilterable={isFilterable}
                  />
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </Styled.SelectField>
  );
};

export default SelectField;

function Options({
  options,
  enteredValue,
  isFilterable,
  onSelectItem,
}: {
  enteredValue: string;
  options: Array<OptionT>;
  isFilterable?: boolean;
  onSelectItem: (value: OptionT) => void;
}) {
  return isFilterable
    ? options
        .filter((option) =>
          enteredValue ? option.title.match(enteredValue) : option
        )
        .map((option) => (
          <li key={option.value} onClick={() => onSelectItem(option)}>
            {option.title}
          </li>
        ))
    : options.map((option) => (
        <li key={option.value} onClick={() => onSelectItem(option)}>
          {option.title}
        </li>
      ));
}
