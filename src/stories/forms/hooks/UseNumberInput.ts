import type IUseInput from "./IUseInput";
import RadixValues from "../../common/value-defaults/RadixValues";
import ValueDefaults from "../../common/value-defaults/ValueDefaults";
import useGenericInput from "./UseGenericInput";

export default function useNumberInput(
  value: number = ValueDefaults.number
): IUseInput<number> {
  const genericInput = useGenericInput(value.toString());

  return {
    handleOnChange: genericInput.handleOnChange,
    value: Number.parseInt(genericInput.value, RadixValues.BaseTwo),
  };
}
