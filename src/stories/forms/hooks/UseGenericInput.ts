import type IInput from "./IInput";
import type React from "react";
import { useState } from "react";

export default function useGenericInput(defaultValue: string): IInput {
  const [value, setValue] = useState<string>(defaultValue);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return {
    handleOnChange,
    value,
  };
}
