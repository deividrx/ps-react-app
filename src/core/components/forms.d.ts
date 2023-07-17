import { TextFieldProps, TextFieldVariants } from "@mui/material";

export interface FormTextFieldProps<Variant extends TextFieldVariants> extends
  Omit<TextFieldProps, 'variant' | 'onChange' | 'onBlur' | "value" | "helperText" | "error"> {
  name: string,
  variant?: Variant;
  control: any
} 




