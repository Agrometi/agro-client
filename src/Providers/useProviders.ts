import { useContext } from "react";

import { AppContext } from "./AppProvider";
import { ThemeContext } from "./ThemeProvider";
import { AppUIContext } from "./AppUIProvider";
import { CreateComboContext } from "./CreateComboProvider";
import { FilterContext } from "./FilterProvider";

const useAppContext = () => useContext(AppContext);
const useAppUIContext = () => useContext(AppUIContext);
const useThemeContext = () => useContext(ThemeContext);
const useCreateComboContext = () => useContext(CreateComboContext);
const useFilterContext = () => useContext(FilterContext);

export {
  useThemeContext,
  useAppContext,
  useAppUIContext,
  useCreateComboContext,
  useFilterContext,
};
