import { InputControl, InputField } from "../index";
import type IInput from "../hooks/IInput";
import Label from "../../elements/label/Label";
import { useId } from "react";

const BaseTextInput: React.FC<BaseTextInputProperties> = ({
  useInput,
  labelText,
  placeholder,
}) => {
  const inputId = useId();

  return (
    <InputField>
      <Label htmlFor={inputId} text={labelText} />
      <InputControl>
        <input
          className="input"
          id={inputId}
          placeholder={placeholder}
          value={useInput.value}
        />
      </InputControl>
    </InputField>
  );
};

export interface BaseTextInputProperties {
  useInput: IInput;
  labelText: string;
  placeholder: string;
}

export default BaseTextInput;
