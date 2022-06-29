import BaseTextInput from "./BaseTextInput";
import useTextInput from "../hooks/UseTextInput";

const BaseTextInputWrapper: React.FC<BaseTextInputProperties> = ({
  labelText = "label",
  placeholder = "placeholder",
}) => {
  const inputHook = useTextInput("default");

  return (
    <BaseTextInput
      labelText={labelText}
      placeholder={placeholder}
      useInput={inputHook}
    />
  );
};

interface BaseTextInputProperties {
  labelText?: string;
  placeholder?: string;
}

export default BaseTextInputWrapper;
