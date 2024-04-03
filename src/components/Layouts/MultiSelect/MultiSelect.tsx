import { MultiSelect as Select } from "react-multi-select-component";

import * as Styled from "./multiSelect.styled";
import { ErrorMessage } from "@/components/Layouts";

import {
  MultiSelectOptionT,
  MultiSelectPropsT,
} from "@/interface/ui/commons.types";

const MultiSelect = <T,>({
  value,
  options,
  onSelect,
  error,
  message,
}: MultiSelectPropsT<T>) => {
  const handleSelect = (
    values: Array<MultiSelectOptionT<T> & { __isNew__?: boolean }>
  ) => {
    const lastIndex = values.length - 1;

    const multiSelectIsNew = values[lastIndex].__isNew__;

    const isNew =
      lastIndex >= 0
        ? typeof multiSelectIsNew === "boolean"
          ? multiSelectIsNew
          : false
        : false;

    onSelect({ lastIndex, isNew, values });
  };

  return (
    <Styled.SelectContainer>
      <Select
        options={options}
        value={value}
        onChange={handleSelect}
        labelledBy="Categories"
        hasSelectAll={false}
        isCreatable={true}
      />

      {error && <ErrorMessage message={message || ""} />}
    </Styled.SelectContainer>
  );
};

export default MultiSelect;
