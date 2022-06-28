import type IInput from "./IInput";
import { useState } from "react";

export default function useGenericInput(defaultValue: string): IInput {
  const [value, setValue] = useState<string>(defaultValue);

  return {
    value,
  };
}
