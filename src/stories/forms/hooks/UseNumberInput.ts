import type IUseInput from "./IUseInput";
import ValueDefaults from "../../common/value-defaults/ValueDefaults";
import useGenericInput from "./UseGenericInput";

export default function useNumberInput(
  value: number = ValueDefaults.number
): IUseInput<number> {
  const genericInput = useGenericInput(value.toString());

  return {
    value: Number.parseInt(genericInput.value, 10),
  };
}
