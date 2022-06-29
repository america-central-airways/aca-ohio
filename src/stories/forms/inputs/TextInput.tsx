import BaseTextInput from "../base/BaseTextInput";
import type IInput from "../hooks/IInput";

const TextInput: React.FC<TextInputProperties> = ({
  labelText,
  useInput,
  placeholder = labelText,
}) => {
  return (
    <BaseTextInput
      labelText={labelText}
      placeholder={placeholder}
      type="text"
      useInput={useInput}
    />
  );
};

interface TextInputProperties {
  useInput: IInput;
  labelText: string;
  placeholder?: string;
}

export default TextInput;
