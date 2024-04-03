import { RefCallBack } from "react-hook-form";

type HookFormTextFieldT = {
  name: string;
  onBlur?: (e: React.FocusEvent) => void;
  onChange: (e: React.ChangeEvent | string) => void;
  ref?: RefCallBack;
  value: string;
  disabled?: boolean;
};

type HookFormFileFieldT = Omit<HookFormTextFieldT, "onChange" | "value"> & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | Array<string>;
};

export type { HookFormTextFieldT, HookFormFileFieldT };
