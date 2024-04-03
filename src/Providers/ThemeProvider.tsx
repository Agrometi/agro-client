/* eslint-disable react-hooks/exhaustive-deps */
import {
  ModeT,
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { ThemeLight, ThemeDark } from "@/styles/Theme";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { createContext, useState, useEffect } from "react";
import { LocaleStorage } from "@/utils";

type ThemeProviderT = {
  children: React.ReactNode;
};

type ThemeContextT = {
  mode: ModeT;
  changeTheme: (mode: ModeT) => void;
};

export const ThemeContext = createContext<ThemeContextT>({
  mode: "light",
  changeTheme: () => {},
});

const ThemeProvider: React.FC<ThemeProviderT> = ({ children }) => {
  const [theme, setTheme] = useState<{ mode: ModeT; theme: DefaultTheme }>({
    theme: ThemeLight,
    mode: "light",
  });

  const changeTheme = (mode: ModeT) => {
    setTheme(() =>
      mode === "light"
        ? { theme: ThemeLight, mode: "light" }
        : { theme: ThemeDark, mode: "dark" }
    );

    LocaleStorage.setTheme(mode);
  };

  useEffect(() => {
    const currentMode = LocaleStorage.getTheme();

    if (currentMode && currentMode !== theme.mode) changeTheme(currentMode);
    else changeTheme("light");
  }, []);

  return (
    <ThemeContext.Provider value={{ mode: theme.mode, changeTheme }}>
      <StyledThemeProvider theme={theme.theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
