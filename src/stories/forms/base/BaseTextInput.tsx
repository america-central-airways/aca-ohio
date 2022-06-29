import { InputControl, InputField } from "../index";
import type IInput from "../hooks/IInput";
import Label from "../../elements/label/Label";
import { useId } from "react";

const BaseTextInput: React.FC<BaseTextInputProperties> = ({
  useInput,
  labelText,
  placeholder,
  type = "text",
}) => {
  const inputId = useId();

  return (
    <InputField>
      <Label htmlFor={inputId} text={labelText} />
      <InputControl>
        <input
          className="input"
          id={inputId}
          onChange={useInput.handleOnChange}
          placeholder={placeholder}
          type={type}
          value={useInput.value}
        />
      </InputControl>
    </InputField>
  );
};

interface BaseTextInputProperties {
  useInput: IInput;
  labelText: string;
  placeholder: string;
  type?: string;
}

export default BaseTextInput;
