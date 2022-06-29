import type React from "react";

export default interface IUseInput<T> {
  value: T;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
