import type IUseInput from "./IUseInput";
import ValueDefaults from "../../common/value-defaults/ValueDefaults";
import useGenericInput from "./UseGenericInput";

export default function useTextInput(
  defaultValue: string = ValueDefaults.string
): IUseInput<string> {
  return useGenericInput(defaultValue);
}
